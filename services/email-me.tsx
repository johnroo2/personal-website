import axios from "axios"

export const emailMe = async(name: string, email: string, message: string) => {
    try {
        const response = await axios.post('/api/send-mail', {
            name,
            email,
            message,
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}