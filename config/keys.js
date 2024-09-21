require('dotenv').config(); 
console.log(process.env.GOOGLE_PROJECT_ID)
const pvtKey = process.env.PRIVATE_KEY.replaceAll("\\n", "\n");
module.exports = {
    // googleProjectID: "react-agent-ppbg",
    // dialogFlowSessionID: "react-bot-session",
    // dialogFlowSessionLanguageCode: "en-US",
    // googlePrivateKeyId: "8ca963049a3fdc76e66569e29635eeecf666318b",
    // googlePrivateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCeQFTOa8WC8Vab\n28d/24b1tgEcx/6YIUXo+X06w24R9gRbnbwpW264epesCW7vM1tuS3DzXswkgZDX\nBoTlufcYYXQRpAfYnsLpwdb/v9K48l+pBah9QPyieSqPa3I2CE+eMXdOwKiNkkV2\nS9ZVkcdhmVyxAzB3i81Rcc4xiNtm168oAbYUHdWiLfqi4d7ZM+se6lwA1alBsxwf\n+ABged1GOOJ/GKWA4MyOWRwDL6fc3vvGsfDZB0nhSw+LaDk5/cmtggwVqg2HCP4V\n85TUB2O8Q3Cj0xmN0nTJR7Krf9B62dGMDD/ci79h5PjakItPqBAkr7Px/aavl2DX\nFRhR5xanAgMBAAECggEABB32Vtx06gAvWaSxHwFuFGxkwQPu+rQ65mG/QU0eSvdU\ni7Gh2I2ZZtFBqucf7LcwVME/sgUwWG7Kft2bjYJ2DDtU0rSqw5b1yTESz9qEt+0O\nUg5koMWVDQEL+2k3MnKq55mv2eunNu+sQPSeIeHGByL/R1em5iVL9Sd5zs4ZryY4\n3UQPZjfLZUAbZjSK3FqkTFlkz0tiNYp4y7wE1KIDSGL5vjpQhyFaKEemxR/BSFnz\n9sYlj1eT8+4djZ1Xb2k0YonQVSsbWSRvfx29olcOlzazkpVE1xcNCFLW++XoKcfg\nb9kmMQy98a9a24IX6xL+5mbppJ/a6WRQQpOYAzuowQKBgQDO4WiWko37a2Ly81Xt\nm0SR7oow9TWKMZZhcLyzmpOrPiit4Tip3vRaLvqe5aNGINowf0TKl0Ug01BZK0+j\n5eAsD3PPxSuv4q9UTbQTWLltBz0o7GkcNbmy6kTwrYUQ7qqN9wryMeFgzI0fDnqn\nVoH19KEDJ8wD+qZJ7YMtGDALIQKBgQDD0yWPeUZWrciuJsWWuBQvv/ZKeQ2nG2vO\nUp52RAu+qK5wy4LHUI/py1ptYjyXxXFNf0OoqTBS3oXTZOqhhxHI5fItc9y6/uvP\nYt0MDgtPGlRjc2vgwyroGjAOTlMGdrUpf3I1KbMUMloFgqvSrmOEIavjKI+yb2Pa\nkegDubBwxwKBgC4L99aD2jxaw5Rl2vte8t00ZefNvFP9A4a+rBGh1zpnRHCnT5Bn\nwqWMDVZusG+8gjQHL82T69wJjLm8LSbC1KmZ6uIU9ctZPkMaZHll5yfAU7mXHTId\nNy7+e8fCJ3sEVEvy76nGtm5wOPzvoRc75wNSpr/oDL3Z/Uc5KVhRKOhhAoGBAJAS\nk+rYBfkVyLTgT7UQ38E10WV/ZJ0SnqFgxbcrXxy6DAVupVwxGIChHXmmsf/TwwWK\nYWQAfk4p63nZIIsQzfPpweDRApANp76f9RO+bXGYZIf6zl7CGJpFUh/kXk8+HRFX\n89XLRTbRyMuPFQ1fQlZfU5BAMmDMdUHE4VeEUZzXAoGBAKHaRxd6Zoraz8vy5b6I\nWIa6/Lh1rRqqTNkJOQJe3mn/yJLNd6scVSXughZPDob4iuJwxIma6i3JwrVCK4L/\nI9Y57cHC/LwqDBnCdoDFu5t5JTthCxma8JjYHzP8ruISLU7WpmvpxYP6scyoLcse\nyRbNUKaYOG82r9NE9YnQ+Usk\n-----END PRIVATE KEY-----\n",
    // googleClientEmail: "react-dialogflow@react-agent-ppbg.iam.gserviceaccount.com",

    googleProjectID:process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID:process.env.SESSION_ID,
    dialogFlowSessionLanguageCode:process.env.LANGUAGE,
    googlePrivateKeyId:process.env.PRIVATE_ID,
    googlePrivateKey:pvtKey,
    googleClientEmail:process.env.CLIENT_EMAIL,
}
