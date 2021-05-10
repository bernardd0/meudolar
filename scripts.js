const DOM = {
    openMenu() {
        document
            .querySelector('.toggle')
            .classList
            .toggle('active');
        document
            .querySelector('.navigation')
            .classList
            .toggle('active')
    }
}