import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env'); // Ajuste le chemin si nécessaire
const defaultEnvContent = `DATABASE_URL="file:./dev.db"`.trim();

if (!fs.existsSync(envPath)) {
	fs.writeFileSync(envPath, defaultEnvContent, 'utf8');
	console.log('.env file created with default values.');
}
