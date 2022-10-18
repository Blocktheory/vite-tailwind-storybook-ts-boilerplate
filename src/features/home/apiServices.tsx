import { globalGetService } from "../../utils/globalApiServices";

export function getBalQuoteRate(chain: string, baseUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
        globalGetService(`token/price?ids=${chain}&vs_currencies=usd`, "", "", baseUrl)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
