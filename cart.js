///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,curr) => {
    return acc + curr.price
},0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) { 
    let taxAmount = cartTotal * (tax + 1)
    let appliedCoupon = taxAmount - couponValue
    return appliedCoupon;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Properties needed for customer object:
1.Name : In order to identify the client and also offer a personalized service. (String; Names are represented in a sequence of characters)
2.Email : For communication; alerts, order or delivery information, payment notification. (String: Represented in text or combination of characters, numbers)
3.Phone : Quickly contacting customer for delivery, cancellations, clarifications. (String: Not intended for numerical operations,flexible formatting)
4.Address : To ensure delivery and locating customer, send in flyers and coupons. (String:Combination of alphanumeric characters)
5.Payment Method : Track and processing of payment. Tips and add-ons management. (String: Textual description of the payment method)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: 'Michelle',
    email: 'michelle@example.com',
    phone: '956-400-1000',
    address: '123 Apart 3b Green Boulevard',
    paymentMethod: 'Paypal'
}

console.log(customer);