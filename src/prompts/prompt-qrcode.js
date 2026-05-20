import chalk from 'chalk';
import pkg from 'prompt';
const { message } = pkg;

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre tipo (1 - Normal ou 2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        require: true,
    }
];

export default promptQRCode;