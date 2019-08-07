# Netflix Ratings Chrome Extension

This chrome extension displays IMDB, Metacritic, and Rotten Tomato ratings for movies and shows on Netflix.

![image](screenshot.png)

## Usage

If you simply want to use this chrome extension please download it from the Chrome Web Store using the following link: https://chrome.google.com/webstore/detail/netflix-ratings/cfkpapjmhefngppdllelhmpnjoonbfif?hl=en-US&gl=CA


## Local Installation (Optional)
If you want to install the extension (and all of the source code) locally please follow the following steps:

1. Generate your own OMDB API key using the following link: `http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0x0euvR%2FzVv1jLU3mGetH4R3kWtYKWACCaYcfoP1IY8g%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU5GG7XylwYou%2BzznFv7FbZmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulN6vYN8IikxxqwtGWTciOwQ4e4xie4N992dlfbpyqd1D&at=freeAcct&Email=`

2. Clone this repository into a local directory on your computer

3. In the root directory of this project create a file called `config.json`. In this file add your API key (generated in step one) using the following format:

```
{
    "api_key": "YOUR_API_KEY_HERE"
}
```

4. Load the extension onto chrome using the following steps:
    
    <ol type='a'>
    <li> Visit Visit "chrome://extensions"
    <li> Enable developer mode by flipping the switch in the top right corner </li>
    <li> Click "Load unpacked" </li>
    <li> Select the extension directory from your local computer </li>
    </ol>
    
    
## Limitations

Currently, since I am using the free tier of the OMDB API (used for retrieving the movie ratings), the extension is limited to 1000 API calls per day. I could fix this issue by paying for an upgraded plan, or by creating my own API to web scrape the ratings from the respective websites. 
