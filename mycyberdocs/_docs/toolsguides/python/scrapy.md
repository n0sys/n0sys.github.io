# Scrapy 

## Config

- Custom user agent : `USER_AGENT in settings.py` 

## CLI commands

- Install scrapy : `pip install scrapy`
- Start a project : `scrapy startproject PROJECT_NAME`
- Scrapy shell : `scrapy shell "URL"`
- Generate spider : `scrapy genspider NAME START_URL`
- Start spider "NAME" : `scrapy crawl NAME`
- Output crawl result to FILE **(overwrites the file)** : `scrapy crawl NAME -O FILE`
- Output crawl result to FILE **(appends the file)** : `scrapy crawl NAME -o FILE`
- Add spider argument : `scrapy crawl NAME -a KEY=VALUE` | Use argument : `getattr(self, KEY, None)` 
- List spiders names : `scrapy list`
- Fetch a PAGE the way the spider does and show headers : `scrapy fetch --headers --nolog PAGE`
- View a PAGE in browser the way the spider does : `scrapy view PAGE`

## Methods

### Response

- Get element using CSS : `Response.css(CSS)`
- Get element using XPath : `Response.xpath(XPATH)`
- Get full URL from RELATIVE url : `response.urljoin(RELATIVE)` 
- Add a NEW_PAGE to crawl **(NEW_PAGE is a relative URL)** : `yield Response.follow(NEW_PAGE, callback=self.parse)`
- Add a new page to crawl based on **Selector** : `yield Response.follow(Selector, callback=self.parse)`
- Add a new page to crawl based on **a tag Selector**  : `yield Response.follow(a_Selector, callback=self.parse)`
- Add a new page to crawl based on **a tags SelectorList** : `yield from response.follow_all(a_SelectorList, callback=self.parse)` 
- Add a new page to crawl based on **css a tags** : `yield from response.follow_all(css="a", callback=self.parse)` 

### Request

- Add a NEW_PAGE to crawl **(NEW_PAGE is a full URL)** : `Request(NEW_PAGE, callback=self.parse)`
  
### Selector | SelectorList

- Get first element : `Selector.get()`
- Get all elements : `Selector.getall()`
- Regex search elements : `Selector.re(REGEX)`

## CSS Selector queries

- Get element attribute : `x::attr(ATTR)`
- Get element text : `x::text`

## To read

- Using your browser’s Developer Tools for scraping : [Link](https://docs.scrapy.org/en/latest/topics/developer-tools.html#topics-developer-tools)
- How to think in XPath : [Link](http://plasmasturm.org/log/xpath101/)
- Using XPath with scrapy : [Link](https://docs.scrapy.org/en/latest/topics/selectors.html#topics-selectors)
- Learn XPath through examples : [Link](http://zvon.org/comp/r/tut-XPath_1.html)
- Process scrape results : [Item Pipeline](https://docs.scrapy.org/en/latest/topics/item-pipeline.html#topics-item-pipeline)
- Crawl AJAX websites : [Links](https://docs.scrapy.org/en/latest/topics/dynamic-content.html)

