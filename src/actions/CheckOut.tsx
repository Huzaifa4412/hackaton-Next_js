import { Cart, customerInfo } from "../../Typing";
import { client } from "@/sanity/lib/client";

const createCustomerInSanity = async (customerInfo: customerInfo) => {
  try {
    const customerObject = {
      _type: "customer",
      name: customerInfo.firstName,
      email: customerInfo.email,
      phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
      country: customerInfo.country,
      postalCode: customerInfo.postalCode,
    };
    const sanityResponse = await client.create(customerObject);
    return sanityResponse;
  } catch (err) {
    console.log(err);
  }
};

const createOrderInSanity = async (cartData: Cart[], customerId: string) => {
  try {
    const customerObject = {
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customerId,
      },
      items: cartData.map((item: Cart) => {
        return {
          _type: "orderItem",
          _id: item.id,
          product_name: item.title,
          product_price: item.price,
          product_total: item.qty * Number(item.price),
          product_color: item.p_color,
          product_size: item.p_size,
          product_quantity: item.qty,
        };
      }),
      order_created: new Date().toISOString(),
    };
    const sanityResponse = await client.create(customerObject);
    console.log("Customer Created in Sanity Successfully");
    return sanityResponse;
  } catch (err) {
    console.log(err);
  }
};

async function CheckOut(customerInformation: customerInfo, cartData: Cart[]) {
  try {
    const customer = await createCustomerInSanity(customerInformation);
    if (customer) {
      await createOrderInSanity(cartData, customer._id);
      console.log("Order Created in Sanity Successfully");
    } else {
      console.log("Error creating customer");
    }
  } catch (err) {
    console.log("Error found while creating order >>>> ", err);
  }
}

export default CheckOut;
