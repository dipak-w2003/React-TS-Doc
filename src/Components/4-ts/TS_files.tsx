const typeAliase: string = `
// Type Alias for a primitive
type UserID = string;

// Type Alias for an object
type User = {
    id: UserID;
    name: string;
    email: string;
    isActive: boolean;
};

// Type Alias for a union
type Status = "active" | "inactive" | "pending";

// Function using type aliases
const printUserInfo = (user: User): void => {};

// Usage
const newUser: User = {
    id: "u123",
    name: "Naruto Uzumaki",
    email: "naruto@konoha.com",
    isActive: true,
};

printUserInfo(newUser);
`;
const interfaceEg: string = `
// Interface for a user
interface User {
  id: string;
  name: string;
  email: string;
}

// Extending an interface
interface Admin extends User {
  role: "admin" | "superadmin";
}

// Function interface
interface LoginFunction {
  (email: string, password: string): boolean;
}

// Implementation
const login: LoginFunction = (email, password) => {
  return email === "admin@domain.com" && password === "securepassword";
};

// Usage
const admin: Admin = {
  id: "a123",
  name: "Sasuke Uchiha",
  email: "sasuke@uchiha.com",
  role: "admin",
};`;

const difs: string = `
// Type Alias for a union
type Shape = "circle" | "square" | "rectangle";

// Interface for an object
interface Circle {
  radius: number;
  type: "circle";
}

// Combining Types and Interfaces
type ShapeDetails = Circle | { width: number; height: number; type: "rectangle" };

// Interface cannot define unions
// interface ShapeUnion = "circle" | "square"; // This will cause an error

// Extending a type vs extending an interface
type ExtendedType = Shape & { color: string };
interface ExtendedInterface extends Circle {
  color: string;
}

// Usage Example
const circle: ExtendedInterface = {
  radius: 5,
  type: "circle",
  color: "red",
};

const rectangle: ShapeDetails = {
  width: 10,
  height: 20,
  type: "rectangle",
};
`;
type codeManage = {
  name: string;
  code: string;
};
const grab1: codeManage = {
  code: typeAliase,
  name: "Type.ts",
};
const grab2: codeManage = {
  code: interfaceEg,
  name: "Interface.ts",
};
const grab3: codeManage = {
  code: difs,
  name: "Type_and_Interface.ts",
};

const codeStr: codeManage[] = [grab1, grab2, grab3];
console.log(codeStr);
export { codeStr };
