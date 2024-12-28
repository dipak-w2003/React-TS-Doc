type collectCodes = {
    id: string,
    title: string,
    optionTitle?: string | boolean,
    cmd?: string
}

const codeBash1: collectCodes = {
    id: "1",
    title: "Create a Vite React Project with TypeScript:",
    optionTitle: "Using Vite (Recommended for Speed):",
    cmd: `npm create vite@latest my-react-app --template react-ts
          cd my-react-app
          npm install`
}

const codeBash2: collectCodes = {
    id: "2",
    title: "Start the Development Server:",
    optionTitle: false,
    cmd: `npm run dev`
}



const ICodesBash: collectCodes[] = [codeBash1, codeBash2]
export { ICodesBash }