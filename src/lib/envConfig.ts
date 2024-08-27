import { loadEnvConfig } from '@next/env'

const loadEnvironmentConfig = async () => {
    const projectDir = process.cwd();
    loadEnvConfig(projectDir);
};

export default loadEnvironmentConfig;