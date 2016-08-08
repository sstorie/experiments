import {Injectable, Inject} from "@angular/core";

export class ApiConfig {
    apiUrl: string;
    apiToken: string;
}

@Injectable()
export class ApiService {
    // We can easily inject the API config using the DI token created when
    //  the application was bootstrapped
    //
    constructor(
        @Inject("api.config") private apiConfig: ApiConfig
    ) {
        console.log("Injected config:", this.apiConfig);
    }
}