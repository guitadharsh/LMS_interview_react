import axios from "axios";

interface newOrderPayload {
    orderBy: string
    courseIds: string[],
    grandTotal: number,
    isPaymentSuccesfull: boolean,
    paymentMode: string
}

const orderServices = {
    newOrder: async (payload: newOrderPayload) => {
        try {
            const response = await axios.post(`api/v1/order/new-order`, {
                payload
            });
            return response;
        } catch (err) {
            throw err;
        }
    },
};

export { orderServices };
