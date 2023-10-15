// to send email
export const submitSendEmail = async (obj: object): Promise<void> => {
    const result = await fetch("/api/client", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    
    return result.json();
};