import { files } from "../src/files.ts";
import { describe, it, expect } from "bun:test";

describe("files", () => {
    it("reads files from a directory", () => {
        const fileBuffers = files("./test/fixtures/sample-dir");
        expect(fileBuffers.length).toBe(2);
        expect(fileBuffers[0]).toBeInstanceOf(Buffer);
        expect(fileBuffers[1]).toBeInstanceOf(Buffer);
    });
    it("reads files from nested directories", () => {
        const fileBuffers = files("./test/fixtures/nested-dir");
        expect(fileBuffers.length).toBe(2);
        expect(fileBuffers[0]).toBeInstanceOf(Buffer);
        expect(fileBuffers[1]).toBeInstanceOf(Buffer);
    });
    it("returns an empty array for an empty directory", () => {
        const fileBuffers = files("./test/fixtures/empty-dir");
        expect(fileBuffers.length).toBe(0);
    });
});