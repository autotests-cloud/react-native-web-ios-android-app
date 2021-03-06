export const translations = {
    en: {
        Login: "Login",
        Password: "Password",
        Language: "Language",
        Remember: "Remember me",
        Submit: "Submit",
        LoginValidation: "Login must be more than 4 characters",
        PasswordValidation: "Password must be more than 4 characters",
        logout: "Logout",
        Hello: "Hello",
        "Not authorized": "Not authorized",
        en: "EN",
        ru: "RU",
        "Header label": "Header label",
        "Logout": "Logout",
        "Content block": "Content block",
        "Authorization form": "Authorization form",
        "Login input": "Login input",
        "Password input": "Password input",
        "Language select": "Language select",
        "Remember me checkbox": "Remember me checkbox",
        "Login button": "Login button",
        "Private content": "Private content",
        "Language menu": "Language menu",
        private1: "Here is your private content #1",
        private2: "and private content #2",
    },
    ru: {
        Login: "Логин",
        Password: "Пароль",
        Language: "Язык",
        Remember: "Запомнить",
        Submit: "Войти",
        LoginValidation: "Логин должен содержать не менее четырех символов",
        PasswordValidation: "Пароль должен содержать не менее четырех символов",
        logout: "Выход",
        Hello: "Привет",
        "Not authorized": "Пожалуйста, авторизуйтесь",
        en: "EN",
        ru: "RU",
        "Header label": "Надпись заголовка",
        "Logout": "Выход",
        "Content block": "Блок контента",
        "Authorization form": "Форма авторизации",
        "Login input": "Поле ввода логина",
        "Password input": "Поле ввода пароля",
        "Language select": "Выбор языка",
        "Remember me checkbox": "Чекбокс запомнить меня",
        "Login button": "Кнопка входа",
        "Private content": "Приватный контент",
        "Language menu": "Меню выбора языка",
        private1: "Ваш приватный контент #1 ",
        private2: "и приватный контент #2"
    }
}

export default (lang="en", str) => translations[lang][str] || str