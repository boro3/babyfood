import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, "Enter valid password")
        .max(255, "Must be shorter than 255")
        .required("Password is required"),
    email: Yup.string()
        .email("Enter valid email")
        .max(255, "Must be shorter than 255")
        .required("Email is required")
});

export const createUserSchema = Yup.object().shape({
    first_name: Yup.string()
        .max(255, "Must be shorter than 255")
        .required("First name is required"),
    last_name: Yup.string()
        .max(255, "Must be shorter than 255")
        .required("Last name is required"),
    dob: Yup.string()
        .max(255, "Must be shorter than 255")
        .required("Date of birthday is required"),
    password: Yup.string()
        .min(4, "Enter valid password")
        .max(255, "Must be shorter than 255")
        .required("Password is required"),
    repeat_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Repeat password is required"),
    email: Yup.string()
        .email("Enter valid email")
        .max(255, "Must be shorter than 255")
        .required("Email is required")
});

export const updateUserSchema = Yup.object().shape({
    first_name: Yup.string()
        .max(255, "Must be shorter than 255"),
    last_name: Yup.string()
        .max(255, "Must be shorter than 255"),
    dob: Yup.string()
        .max(255, "Must be shorter than 255"),
    password: Yup.string()
        .min(4, "Enter valid password")
        .oneOf([Yup.ref('repeat_password'), null], 'Passwords must match')
        .max(255, "Must be shorter than 255"),
    repeat_password: Yup.string()
        .min(4, "Enter valid password")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string()
        .email("Enter valid email")
        .max(255, "Must be shorter than 255")
});

export const recipeSchema = Yup.object().shape({
    prep_time: Yup.number()
        .typeError('Number only')
        .integer('Invalid number')
        .required('Required')
        .min(0, 'Min value 0.'),
    num_person: Yup.number()
        .typeError('Number only')
        .integer('Invalid number')
        .required('Required')
        .min(0, 'Min value 0.'),
    description: Yup.string()
        .required('Required')
        .min(5, 'Enter valid description')
        .max(255, "Must be shorter than 255"),
    title: Yup.string()
        .required("Required")
        .min(3, 'Enter valid title')
        .max(255, "Must be shorter than 255"),
    category: Yup.string()
        .required('Required')
});

