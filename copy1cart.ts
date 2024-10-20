import { Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {

}
document.addEventListener('DOMContentLoaded', function () {
    const emptyCartMessage = document.querySelector('.empty-cart-message') as HTMLElement | null;

    document.addEventListener('click', function (e: MouseEvent) {
        const target = e.target as HTMLElement;

        // Check if the clicked element has the class 'remove-course'
        if (target.classList.contains('remove-course')) {
            e.preventDefault();

            const cartCourse = target.closest('.cart-course') as HTMLElement | null;

            if (cartCourse) {
                cartCourse.remove();

                if (document.querySelectorAll('.cart-course').length === 0 && emptyCartMessage) {
                    emptyCartMessage.classList.add('show');
                }
            } else {
                console.error("No cart course found to remove.");
            }
        }
    });

    const cartCourses = document.querySelectorAll('.cart-course') as NodeListOf<HTMLElement>;
    if (cartCourses.length === 0 && emptyCartMessage) {
        emptyCartMessage.classList.add('show');
    }
});