class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo(): void {
        console.log(`Customer Info:
      ID: ${this.id}
      Name: ${this.name}
      Email: ${this.email}
      Phone: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
        console.log(`Email updated to: ${this.email}`);
    }
}
