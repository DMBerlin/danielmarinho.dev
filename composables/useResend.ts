import { useFetch } from "#app";

export const useResend = async (): Promise<void> => {
  try {
    await useFetch("/api/resend", {
      method: "post",
      body: {
        subject: "Resumé downloaded!",
        message: `<p>Congrats! Someone just downloaded your resumé at <strong>${new Date()}</strong>!</p>.`,
      },
    });
  } catch (error) {
    console.error({ error });
  }
};
