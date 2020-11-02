// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".burger-devoure").on("click", function (event) {
        const id = $(this).data("id");
        const changeDevoured = $(this).data("changedevoured");

        const newDevouredState = {
            devoured: changeDevoured
        };
        // Send the PUT request.
        $.ajax("/api/burgers/devoured/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burger-edit").on("click", function (event) {
        const id = $(this).data("id");
        console.log("edit");
        window.location.href = `/${id}`;
    });

    $(".burger-rename").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const id = $(this).data("id");
        const updatedBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        if (updatedBurger.burger_name) {
            // Send the POST request.
            $.ajax("/api/burgers/namechange/" + id, {
                type: "PUT",
                data: updatedBurger
            }).then(
                () => {
                    // Reload the page to get the updated list
                    location.assign("/");
                }
            );
        } else {
            alert('Please enter a valid burger name');
        }
    });

    $(".burger-create").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        if (newBurger.burger_name) {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                () => {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else {
            alert('Please enter a valid burger name');
        }
    });

    $(".burger-delete").on("click", function (event) {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burger-delete-all").on("click", function (event) {
        // Send the DELETE request.
        $.ajax("/api/burgers/deleteall", {
            type: "DELETE"
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
