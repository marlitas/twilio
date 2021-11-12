class TargetingSolution {
    constructor(coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.z = coordinates.z;
    }

    target() {
        const format = `(${this.x}, ${this.y}, ${this.z})`;
        return format;
    }
}