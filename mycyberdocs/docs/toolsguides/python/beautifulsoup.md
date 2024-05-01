# Beautiful Soup

## Installation 

- `pip install beautifulsoup4`
- `pip install lxml`

## Create soup

- HTML : `BeautifulSoup(markup, "lxml")`
- XML : `BeautifulSoup(markup, "lxml-xml")`
  
## Tag

- Get tag name : `Tag.name`
- Get a tag attribute : `Tag[ATTR]`
- Get all tag attributes : `Tag.attr`
- Set tag attribute : `Tag[ATTR] = Value`
- Delete tag attribute : `del Tag[ATTR]`
- Get tag text content : `Tag.string`

## Soup / Tag

- Find Tag based on Attribute : `Soup.find(Tag, ATTR="")`
- Find Tags based on Attribute regex : `Soup.find(Tag, ATTR=re.compile(REGEX))`
- Find Tags based on string regex : `Soup.find_all(string=re.compile(REGEX))`
- Find Tags that contain Attribute : `Soup.find_all(id=True)`
- Find Tags that contain html5 Attribute : `Soup.find_all(attrs={"data-foo": "value"})`
- Find Tags by CSS class : `Soup.find_all(X, class_=CLASS)`
- Find Tags using CSS Selector : `Soup.select(CSS)`
- Find Tag using function as filter :
    ```
    def func(css_class):
      return css_class is not None and len(css_class) == 6
    soup.find_all(class_=func)
    ```
- Find if tag exists using css selectors : `soup.css.match("#id")`
- Find all X tags : `Soup.find_all(X)`
- Find all tags : `Soup.find_all(True)`
- Get first X tag : `Soup.X`
- Get direct children : `Soup.children`
- Get all children : `Soup.descendants`
- Get all parents : `Soup.parents`
- Prettify soup : `Soup.prettify()`
- Get soup next sibling : `Soup.next_sibling`
- Get soup next siblings : `Soup.next_siblings`
- Get soup previous sibling : `Soup.previous_sibling`
- Get soup previous siblings : `Soup.previous_siblings`
- Get soup strings : `Soup.strings`
- Get soup stripped strings : `Soup.stripped_strings`
- Limit results : `Soup.find_all(Tag, limit=n)`
