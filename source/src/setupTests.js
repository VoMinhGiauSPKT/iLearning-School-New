// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement window.matchMedia. Polyfill it so components relying on it
// (e.g. embla-carousel-react, used by the Carousel component) don't crash in tests.
if (typeof window !== 'undefined' && !window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        }),
    });
}

// jsdom does not implement IntersectionObserver. Polyfill it so components relying on it
// (e.g. embla-carousel-react's inView tracking, used by the Carousel component) don't crash
// in tests.
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
    class IntersectionObserverMock {
        observe = () => {};

        unobserve = () => {};

        disconnect = () => {};

        takeRecords = () => [];
    }

    window.IntersectionObserver = IntersectionObserverMock;
    global.IntersectionObserver = IntersectionObserverMock;
}

// jsdom does not implement ResizeObserver. Polyfill it so components relying on it
// (e.g. embla-carousel-react's resize tracking, used by the Carousel component) don't crash
// in tests.
if (typeof window !== 'undefined' && !window.ResizeObserver) {
    class ResizeObserverMock {
        observe = () => {};

        unobserve = () => {};

        disconnect = () => {};
    }

    window.ResizeObserver = ResizeObserverMock;
    global.ResizeObserver = ResizeObserverMock;
}
