
# User Management System API

This repository contains a set of APIs for managing user registration, login, and searching based on various criteria. Below are the details of each API:

## 1. Register User API

### Endpoint
- `POST /api/users/register`

### Request Body
```json
{
  "name": "Bhuvanesh",
  "email": "bhuvanesh@example.com",
  "phone": "123-456-7890",
  "address": {
    "street": "123 Main St",
    "city": "hosahalli",
    "state": "INDIA",
    "postalCode": "90001"
  },
  "registrationDate": "2024-04-10",
  "pinCode": "1234"
}
```

### Description
- Allows users to register by providing their details.
- Mandatory fields: `name`, `email`, `registrationDate`, and `pinCode`.
- Saves user information and address details in the database.

## 2. Login API

### Endpoint
- `POST /api/users/login`

### Request Body
```json
{
  "email": "bhuvanesh@example.com",
  "password": "mysecretpassword"
}
```

### Description
- Allows users to log in using their email address and password.

## 3. Search User API

### Endpoint
- `GET /api/users/search`

### Query Parameters
- `name`: Partial or full name of the user
- `pin_code`: User's PIN code
- `start_date` and `end_date`: Registration date range (optional)
- `page` and `size`: Pagination parameters

### Description
- Enables searching for users based on specified criteria.
- Returns paginated search results.

## 4. String Permutation API

### Endpoint
- `POST /api/permutations`

### Request Body
```json
{
  "input_string": "abc"
}
```

### Description
- Takes any string as input and returns a list containing all possible permutations of that string.

Feel free to adapt and enhance these APIs based on your specific requirements. Happy coding! 🚀#