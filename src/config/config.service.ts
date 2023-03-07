import * as dotenv from 'dotenv';

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor() {
    const result = dotenv.config();

    if (result.error) {
      this.envConfig = process.env;
    } else {
      this.envConfig = result.parsed;
    }
  }

  public async getPortConfig() {
    return this.envConfig.PORT;
  }

  public async getMongoConfig() {
    return {
      uri: 'mongodb+srv://' + this.envConfig.MONGO_USER + ':' + this.envConfig.MONGO_PASSWORD + '@' + this.envConfig.MONGO_HOST + '/' + this.envConfig.MONGO_DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}