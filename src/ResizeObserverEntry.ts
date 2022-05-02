import { ContentRect } from './ContentRect';

class ResizeObserverEntry {
    public readonly target: any;
    public readonly contentRect: ContentRect;
    constructor(target: any) {
        this.target = target;
        this.contentRect = ContentRect(target);
    }
}

export { ResizeObserverEntry };
