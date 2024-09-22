// index.ts

export interface User {
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  avatar?: string;
  role?: string;
  join_date?: string;
  description?: string;
}

export const mockData: User[] = [
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  }
];

export const mockLargeData: User[] = [
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "4348814a-4ab9-4302-b1a0-93b6910080e0",
    username: "rgatfield1",
    firstname: "Rouvin",
    lastname: "Gatfield",
    email: "rgatfield1@state.gov",
    avatar: "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "2/28/2024",
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: "b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd",
    username: "bhancke2",
    firstname: "Bari",
    lastname: "Hancke",
    email: "bhancke2@bloglovin.com",
    avatar: "https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1",
    role: "Engineer",
    join_date: "4/16/2024",
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
];
