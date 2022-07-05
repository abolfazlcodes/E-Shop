# E-shop clothing

Implemented an astonishing react clothing e-commerce app named e-shop that performs various actions like sign up, login, adding to cart and total price of the cart around with detailed information of the products in the cart. Using redux to handle the states alongside with context for user login persist.

Project link:
https://e-shop-clothes.netlify.app/

## Screenshots

![App Screenshot](https://s6.uupload.ir/files/demo_9p59.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/abolfazl-jmd/E-Shop
```

Go to the project directory

```bash
  cd project-folder
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Build command

Get a build project with this command

```bash
  npm run build
```

## API Reference

#### Get all items

```http
  GET https://eshop-clothings.herokuapp.com/api/product
```

#### Get product

```http
  GET https://eshop-clothings.herokuapp.com/api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Register a new account

```http
  Post https://eshop-clothings.herokuapp.com/api/user/register
```

#### Login user

```http
  Post https://eshop-clothings.herokuapp.com/api/user/login
```

## Features

- Registering account
- Login to your account
- User persist login
- Bookmarking products
- Adding products to cart
- Choosing product size, color
- Global states using context and redux
- Async action handling with redux-thunk
- Filtering different categories of clothes
- Input fields validation before submiting data

## Tech Stack

**Client:** JavaScript, React, Redux,

**Server:** Node, Mongodb

## Packages

Here is the list of packages used to develope this project:

- Formik
- Yup
- React-select
- React-router-dom v6
- React toastify
- axios
- redux-thunk

## License

[MIT](https://choosealicense.com/licenses/mit/)
