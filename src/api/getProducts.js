import axios from 'axios';

export const getProducts = (setQueryCompleted, queryCompleted, setProducts) => {
    const url = process.env.REACT_APP_API_URL;
    const token = process.env.REACT_APP_API_TOKEN;

    axios({
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': token
        },
        url: url,
        method: 'post',
        data: {
        query: `{
            shop {
                products(first:50, query: "product_type:'Heroes' OR product_type:'Sharps' OR product_type:'Polos'" ,){
                edges {
                    node {
                        id
                        productType
                        title
                        tags
                        images(first:2) {
                             edges {
                              cursor
                              node {
                                originalSrc
                                id
                              }
                             }
                           }  
                        priceRange {
                            maxVariantPrice {
                                amount
                            }
                        }
                        updatedAt
                    }
                }
                pageInfo {
                    hasNextPage
                }
                }
            }
        }`
        }
    }).then((response) => {
        setQueryCompleted(true);
        if (!queryCompleted) setProducts(response.data.data.shop.products.edges)
    })
        .catch(error => {
        console.log('error', error)
    });
}
