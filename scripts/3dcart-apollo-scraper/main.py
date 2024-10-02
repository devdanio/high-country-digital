import asyncio
from Wappalyzer import Wappalyzer, WebPage
import requests
from bs4 import BeautifulSoup
import re

matching_urls = []


import re

def filter_valid_urls(urls):
    # Regular expression for validating a URL
    url_pattern = re.compile(
        r'^(https?://)?'  # Optional http:// or https://
        r'(www\.)?'       # Optional www.
        r'([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}'  # Domain name
        r'(:\d+)?'        # Optional port
        r'(/[^/\s]*)*$'   # Optional path and query parameters
    )
    
    # Filter and return only valid URLs
    valid_urls = []
    for url in urls:
        # Strip whitespace and convert to lowercase
        url = url.strip().lower()
        
        # Add http:// if no protocol is specified
        if not url.startswith(('http://', 'https://')):
            url = 'http://' + url
        
        # Check if the URL is valid
        if url_pattern.match(url):
            valid_urls.append(url)
    
    return valid_urls


urls = valid_urls = filter_valid_urls(list(set([
    "http://www.seasnax.com/",
    "https://otherdesigns.com"
])))

async def check_3dcart(url):
    wappalyzer = Wappalyzer.latest()
    webpage = WebPage.new_from_url(url)
    technologies = wappalyzer.analyze(webpage)
    print(webpage.html)
    # Check for specific indicators of 3dcart
    if '3d_cart' in webpage.html:  # Check for the presence of the _3d_cart variable
        return True
    
    return '3dcart' in technologies

async def main(urls):
    tasks = [check_3dcart(url) for url in urls]
    results = await asyncio.gather(*tasks)
    for url, is_3dcart in zip(urls, results):
        print(f"{url}: {'Built with 3dcart' if is_3dcart else 'Not built with 3dcart'}")

# Run the main function
asyncio.run(main(urls))