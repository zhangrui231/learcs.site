import json
import requests
import re
import os
from enum import Enum
import textwrap

class ResourceType(Enum):
    FILE = 1
    DIR = 2

class MarkdownProcessor:
    def __init__(self, api_url, html_url, image_directory, new_base_url):
        self.api_url = api_url
        self.html_url = html_url
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


    def process_markdown(self):
        try:
            url = f'{self.api_url}?url={self.html_url}'
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
            with open('html.md', 'w', encoding='utf-8') as f:
                f.write(new_markdown_text)
        except Exception as e:
            print(f"General error during processing: {e}")


class cs50:
    def __init__(self, api_url, html_url, image_directory, new_base_url):
        self.api_url = api_url
        self.html_url = html_url
        self.image_directory = image_directory
        self.new_base_url = new_base_url


    courseResources = [
        {"name": "index","type":ResourceType.FILE},
        {"name": "notes","type":ResourceType.FILE},
        {"name": "problem set","type":ResourceType.DIR},
        {"name": "lab","type":ResourceType.FILE},
        {"name": "practice problems","type":ResourceType.DIR},

    ]
    Lectures = ['lecture0 Scratch','lecture1 C','lecture2 Arrays','lecture3 Algorithms','lecture4 Memory','lecture5 Data Structures','lecture6 python','lecture7 SQL','lecture8 HTML,CSS,JavaScript','lecture9 Flask','lecture10 Emoji','lecture11 CyberSecurity']

    def generate_lectures_index(self,title):
        template = f"""
        ---
        title: {title}
        ---

        import DocCardList from '@theme/DocCardList';

        # Scratch
        lecture Video

        <iframe src="//player.bilibili.com/player.html?aid=277746636&bvid=BV17c411f78k&cid=1311465503&p=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>


        <DocCardList />
        """
        return textwrap.dedent(template)

    def generate_lectures_category(self,title):
        template = f"""
        {
            "label": {title},
            "position": 1
        }
        """
        return textwrap.dedent(template)
    
    def generate_lectures_notes(self,title):
        template = f"""
        ---
        sidebar_position: 1
        description: {title} Notes | 课程笔记 
        title: Notes
        ---

        """
        return textwrap.dedent(template)
    
    def generate_lectures_lab(self,title):
        template = f"""
        ---
        sidebar_position: 2
        description: {title} Lab | 实验
        title: Lab
        ---

    
class Scaffold:
    def __init__(self, api_url, html_url, image_directory, new_base_url):
        self.api_url = api_url
        self.html_url = html_url
        self.image_directory = image_directory
        self.new_base_url = new_base_url

    


if __name__ == '__main__':
    api_url = 'http://127.0.0.1:3333/api/url2md'
    html_url = 'https://cs50.harvard.edu/x/2023/labs/1/'
    image_directory = 'D:/code/nodejs/learncs.set/static/img/cs50'
    new_base_url = '/img/cs50'

    processor = MarkdownProcessor(api_url, html_url, image_directory, new_base_url)
    processor.process_markdown()
