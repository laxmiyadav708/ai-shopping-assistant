import requests

DUMMYJSON_API = "https://dummyjson.com/products/search/"


def fetch_products(limit=10, search_query=None, category=None):
    """
    Fetch products from DummyJSON API.
    Supports optional limit, search, and category filtering.
    """
    params = {"limit": limit}

    if search_query:
        url = f"{DUMMYJSON_API}/search"
        params["q"] = search_query
    elif category:
        url = f"{DUMMYJSON_API}/category/{category}"
    else:
        url = DUMMYJSON_API

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return data.get("products", [])
    except requests.RequestException as e:
        print(f"Error fetching products: {e}")
        return []

def format_product(product):
    """
    Format product data for display or frontend use.
    """
    return {
        "id": product.get("id"),
        "title": product.get("title"),
        "price": product.get("price"),
        "description": product.get("description"),
        "thumbnail": product.get("thumbnail"),
        "category": product.get("category"),
    }

def get_formatted_products(limit=10, search_query=None, category=None):
    """
    Fetch and format products in one step.
    """
    raw_products = fetch_products(limit, search_query, category)
    return [format_product(p) for p in raw_products]

# Example usage
if __name__ == "__main__":
    products = get_formatted_products(limit=5)
    for p in products:
        print(p)
