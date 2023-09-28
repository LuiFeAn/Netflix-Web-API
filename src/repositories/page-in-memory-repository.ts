import { Page } from "puppeteer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PageInMemoryRepository {

    pages: Map<string, Page>;

    constructor() {
        this.pages = new Map();
    }

    get(key: string) {

        const page = this.pages.get(key);

        return page;

    }

    add(key: string, page: Page){

        this.pages.set(key,page);

    }

    delete(key: string){
        
        this.pages.delete(key);

    }
}
