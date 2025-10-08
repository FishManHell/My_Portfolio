import { render, screen, fireEvent, act } from '@testing-library/react';
import { Modal } from './Modal';

jest.useFakeTimers();

describe('Modal', () => {
    const onCloseMock = jest.fn();

    afterEach(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });

    test("doesn't render", () => {
        const { container } = render(<Modal isOpen={false} onClose={onCloseMock}>Content</Modal>);
        expect(container.firstChild).toBeNull();
    });

    test("Render test", () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Content</Modal>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    test("clicking on the overlay triggers the closeHandler and calls onClose after the ANIMATION_DELAY", () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Content</Modal>);

        const modalContent = screen.getByText('Content');
        const modalWrapper = modalContent.closest('div')?.parentElement?.parentElement;
        if (!modalWrapper) throw new Error('Modal wrapper not found');
        fireEvent.click(modalWrapper);
        expect(modalWrapper.className).toMatch(/is-closing/);
        act(() => jest.advanceTimersByTime(300));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
        expect(modalWrapper.className).not.toMatch(/is-closing/);
    });


    test("click on some content", () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Content</Modal>);

        const content = screen.getByText('Content');
        fireEvent.click(content);
        expect(onCloseMock).not.toHaveBeenCalled();
    });

    test("sets body overflow to hidden when opened and resets to auto on unmount", () => {
        const { unmount } = render(<Modal isOpen={true}>Content</Modal>);

        expect(document.body.style.overflow).toBe('hidden');
        unmount();
        expect(document.body.style.overflow).toBe('auto');
    });
});
