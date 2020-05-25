const langStrings = {
    English: {
        Login: "Login",
        Password: "Password",
        Language: "Language",
        Remember: "Remember me",
        Submit: "Submit",
        LoginValidation: "Login must be more than 4 characters",
        PasswordValidation: "Password must be more than 4 characters",
        logout: "Logout",
        Hello: "Hello",
        "Not authorized": "Not authorized"

    },
    Russian: {
        Login: "Логин",
        Password: "Пароль",
        Language: "Язык",
        Remember: "Запомнить",
        Submit: "Войти",
        LoginValidation: "Логин должен содержать не менее четырех символов",
        PasswordValidation: "Пароль должен содержать не менее четырех символов",
        logout: "Выход",
        Hello: "Привет",
        "Not authorized": "Пожалуйста, авторизуйтесь"
    }
}

export default (lang="English", str) => langStrings[lang][str] || str