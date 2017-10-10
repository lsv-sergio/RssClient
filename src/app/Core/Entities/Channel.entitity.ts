import { Feed } from "./Feed.Entity";

export class Channel {
    public Id: number;
    public Name: string;
    public Feeds: Feed[];
}
