import json
import requests
import re
import os
from enum import Enum
import textwrap

class ResourceType(Enum):
    FILE = 1
    DIR = 2
class NetUtils:
    @staticmethod
    def check_url_404(url):
        try:
            response = requests.get(url)
            if response.status_code == 404:
                return True
            else:
                return False
        except requests.exceptions.RequestException as e:
            print(f"Error checking URL '{url}': {e}")


class MarkdownProcessor:
    def __init__(self, api_url, image_directory, new_base_url):
        self.api_url = api_url
        self.image_directory = image_directory
        self.new_base_url = new_base_url

    def download_image(self, image_url):
        try:
            response = requests.get(image_url)
            image_filename = os.path.basename(image_url)
            with open(self.image_directory + '/' + image_filename, 'wb') as file:
                file.write(response.content)
        except requests.exceptions.RequestException as e:
            print(f"Error downloading image: {e}")

    def extract_image_links_from_markdown(self, markdown_text):
        try:
            image_links = re.findall(r'!\[(.*?)\]\((.*?)\s*(?:\"(.*?)\")?\)', markdown_text)
            return image_links
        except Exception as e:
            print(f"Error extracting image links: {e}")
            return []

    def replace_image_links_in_markdown(self, markdown_text):
        def replace_link(match):
            alt_text = match.group(1)
            original_url = match.group(2)
            title = match.group(3) if match.group(3) else ''
            filename = original_url.split('/')[-1]
            new_url = f"{self.new_base_url}/{filename}"
            title_part = f' "{title}"' if title else ''
            return f"![{alt_text}]({new_url} {title_part})"
        try:
            new_markdown_text = re.sub(r'!\[(.*?)\]\((.*?)\s*(?:\"(.*?)\")?\)', replace_link, markdown_text)
            return new_markdown_text
        except Exception as e:
            print(f"Error replacing image links: {e}")


    def process_markdown(self,html_url):
        while True:
            try:
                url = f'{self.api_url}?url={html_url}'
                response = requests.get(url)
                data = json.loads(response.text)

                # Extract image links
                links = self.extract_image_links_from_markdown(data['content'])

                # Download images
                for link in links:
                    self.download_image(link[1])

                # Replace image links
                new_markdown_text = self.replace_image_links_in_markdown(data['content'])

                # Save updated markdown
                # with open('html.md', 'w', encoding='utf-8') as f:
                #     f.write(new_markdown_text)
                return new_markdown_text
            except Exception as e:
                print(f"General error during processing: {e}")


class Cs50:
    def __init__(self,api_url, image_directory, new_base_url,lecture_base_dir):
        self.markdownProcessor = MarkdownProcessor(api_url,image_directory,new_base_url)
        self.lecture_base_dir = lecture_base_dir
    
    courseResources = [
        {"name": "index","type":ResourceType.FILE},
        {"name": "notes","type":ResourceType.FILE},
        {"name": "problem set","type":ResourceType.DIR},
        {"name": "lab","type":ResourceType.FILE},
        {"name": "practice problems","type":ResourceType.DIR},

    ]
    lectures = ['lecture0 Scratch','lecture1 C','lecture2 Arrays','lecture3 Algorithms','lecture4 Memory','lecture5 Data Structures','lecture6 python','lecture7 SQL','lecture8 HTML,CSS,JavaScript','lecture9 Flask','lecture10 Emoji','lecture11 CyberSecurity']

    notes_url = "https://cs50.harvard.edu/x/2023/notes/"
    labs_url = "https://cs50.harvard.edu/x/2023/labs/"
    problem_set_url = "https://cs50.harvard.edu/x/2023/psets/"
    generate_pratice_problem_url = "https://cs50.harvard.edu/x/2023/problems/"

    def generate_lectures_index(self):
        template = f"""\
        import DocCardList from '@theme/DocCardList';

        # Scratch
        lecture Video

        <iframe src="//player.bilibili.com/player.html?aid=277746636&bvid=BV17c411f78k&cid=1311465503&p=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>


        <DocCardList />
        """
        return textwrap.dedent(template)

    def generate_lectures_category(self,title,index):
        template = f"""\
        {{
            "label": "{title}",
            "position": {index}
        }}
        """
        return textwrap.dedent(template)
    
    def generate_lectures_notes(self,title,content):
        template = f"""\
---
sidebar_position: 1
description: {title} Notes | 课程笔记 
title: Notes
---

{content}
        """
        return textwrap.dedent(template)
    
    def generate_lectures_lab(self,title,content):
        template = f"""\
---
sidebar_position: 4
description: {title} Lab | 实验
title: Lab
---

{content}
        """
        return textwrap.dedent(template)
    
    def generate_problem_set_category(self):
        template = f"""
        {{
            "label": "Problem Set",
            "position": 2
        }}
        """
        return textwrap.dedent(template)
    
    def generate_problem_set_index(self,title,content):
        template = f"""\
---
title: Problem Set
description: cs50x {title} Problem Set
---

import DocCardList from '@theme/DocCardList';
        
{content}

<DocCardList />
        """
        return textwrap.dedent(template)
    
    def generate_problem_set_item(self,index,title):
        template = f"""\
        ---
        sidebar_position: {index}
        description: cs50x problem set {title}
        title: {title}
        ---
        """
        return textwrap.dedent(template)
    def generate_pratice_problem_category(self):
        template = f"""
        ---
        {{
            "label": "Practice Problem",
            "position": 3
        }}
        ---
        """
        return textwrap.dedent(template)
    def generate_pratice_problem_index(self,title,content):
        template = f"""\
---
title: Practice Problem
description: cs50x {title} Practice Problem
--- 

import DocCardList from '@theme/DocCardList';

{content}

<DocCardList />
        """
        return textwrap.dedent(template)
    
    def generate_pratice_problem_item(self,index,title):
        template = f"""\
        ---
        sidebar_position: {index}
        description: cs50x practice problem  {title}
        title: {title}
        ---
        """
        return textwrap.dedent(template)
    
    def get_resource_url(self,resource_name,index):
            if resource_name == 'notes':
                url = self.notes_url +'/'+str(index) +'/'
            elif resource_name == 'lab':
                url = self.labs_url  +'/'+str(index)  +'/'
            elif resource_name == 'problem set':
                url = self.problem_set_url  +'/'+str(index)  +'/'
            elif resource_name == 'practice problems':
                url = self.generate_pratice_problem_url  +'/'+str(index)  +'/'
            else:
                url = None
            
            if url:
                if NetUtils.check_url_404(url):
                    return None
            return url
    def create_lecture_category(self,index):
        with open(f'{self.lecture_base_dir}/lecture{index}/_category_.json', 'w', encoding='utf-8') as f:
            f.write(self.generate_lectures_category(self.lectures[index-1],index))

    def create_lecture_index(self,index,resource_name):
        with open(f'{self.lecture_base_dir}/lecture{index}/{resource_name}.md', 'w', encoding='utf-8') as f:
            f.write(self.generate_lectures_index())

    def create_lecture_notes(self,index,resource_name,content):
        with open(f'{self.lecture_base_dir}/lecture{index}/{resource_name}.md', 'w', encoding='utf-8') as f:
            f.write(self.generate_lectures_notes(self.lectures[index-1],content))

    def create_lecture_lab(self,index,resource_name,content):
        with open(f'{self.lecture_base_dir}/lecture{index}/{resource_name}.md', 'w', encoding='utf-8') as f:
            f.write(self.generate_lectures_lab(self.lectures[index-1],content))

    def create_problem_set_category(self,index):
        with open(f'{self.lecture_base_dir}/lecture{index}/problem set/_category_.json', 'w', encoding='utf-8') as f:
            f.write(self.generate_problem_set_category())

    def create_pratice_problem_category(self,index):
        with open(f'{self.lecture_base_dir}/lecture{index}/practice problems/_category_.json', 'w', encoding='utf-8') as f:
            f.write(self.generate_pratice_problem_category())

    def create_problem_set_index(self,index,content):
        # Extract links using a regular expression
        regex = r'\((https://cs50\.harvard\.edu/x/2023/psets/{1,2}\d+/[^ ]*)\)'
        pset_links = re.findall(regex, content)
        # Download and update links
        for i,link in enumerate(pset_links):
            link_new = re.sub(r'(?<!https:)//', '/', link)
            print(f"Downloading link: {link_new}")
            filename = link_new.strip('/').split('/')[-1]  # Extract filename from URL
            print(f"Downloading file: {filename}")

            pset_content = self.markdownProcessor.process_markdown(link_new)
            pset_template = self.generate_problem_set_item(i + 1,filename)
            pset_content = pset_template + '\n' + pset_content
            with open(f'{self.lecture_base_dir}/lecture{index}/problem set/{filename + ".md"}', 'w', encoding='utf-8') as f:
                f.write(pset_content)
            
            content = content.replace(link, filename + ".md") 

        with open(f'{self.lecture_base_dir}/lecture{index}/problem set/index.md', 'w', encoding='utf-8') as f:
            f.write(self.generate_problem_set_index(self.lectures[index-1],content))

    def create_pratice_problem_index(self,index,content):
        # Extract links using a regular expression
        regex = r'\((https://cs50\.harvard\.edu/x/2023/problems/{1,2}\d+/[^ ]*)\)'
        pset_links = re.findall(regex, content)

        # Download and update links
        for i,link in enumerate(pset_links):
            link_new = re.sub(r'(?<!https:)//', '/', link)
            filename = link_new.strip('/').split('/')[-1]  # Extract filename from URL
            print(f"Downloading file: {filename}")
            print(f"Downloading link: {link_new}")
            pset_content = self.markdownProcessor.process_markdown(link_new)
            pset_template = self.generate_pratice_problem_item(i + 1,filename)
            pset_content = pset_template + '\n' + pset_content
            with open(f'{self.lecture_base_dir}/lecture{index}/practice problems/{filename + ".md"}', 'w', encoding='utf-8') as f:
                f.write(pset_content)
            
            content = content.replace(link, filename + ".md") 

        with open(f'{self.lecture_base_dir}/lecture{index}/practice problems/index.md', 'w', encoding='utf-8') as f:
            f.write(self.generate_pratice_problem_index(self.lectures[index-1],content))

    
    def generate_lecture_framwork(self,index):
        os.mkdir(f'{self.lecture_base_dir}/lecture{index}')
        # generate category
        self.create_lecture_category(index)
       
        # generate resource
        for resource in self.courseResources:
            
            url = self.get_resource_url(resource['name'],index -1)

            if resource['type'] == ResourceType.FILE:
                if resource['name'] == 'index':
                    self.create_lecture_index(index,resource['name'])
                elif resource['name'] == 'notes':
                    if url:
                        content = self.markdownProcessor.process_markdown(url)
                        self.create_lecture_notes(index,resource['name'],content)

                elif resource['name'] == 'lab':
                    if url:
                        content = self.markdownProcessor.process_markdown(url)
                        self.create_lecture_lab(index,resource['name'],content)

            elif resource['type'] == ResourceType.DIR:
                if url:
                    content = self.markdownProcessor.process_markdown(url)
                    
                    os.mkdir(f'{self.lecture_base_dir}/lecture{index}/{resource["name"]}')
                    if resource['name'] == 'problem set':
                        # category
                        self.create_problem_set_category(index)
                        # index
                        self.create_problem_set_index(index,content)
                        
                    elif resource['name'] == 'practice problems':
                        # category
                        self.create_pratice_problem_category(index)
                        # index
                        self.create_pratice_problem_index(index,content)                   


    
class Scaffold:
    
    def __init__(self, base_dir, course_name, lectures, course_resources):
        self.base_dir = base_dir
        self.course_name = course_name
        self.lectures = lectures
        self.courseResources = course_resources
    


if __name__ == '__main__':
    api_url = 'http://127.0.0.1:3333/api/url2md'
    image_directory = 'D:/code/nodejs/learncs.set/static/img/cs50'
    new_base_url = '/img/cs50'
    lecture_base_dir = './'
    # html_url = 'https://cs50.harvard.edu/x/2023/psets/1/'
    # md = MarkdownProcessor(api_url,image_directory,new_base_url)
    # md.process_markdown(html_url)
    cs50 = Cs50(api_url,image_directory,new_base_url,lecture_base_dir)
    cs50.generate_lecture_framwork(2)
