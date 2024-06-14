export const data = [
    {
        username: "First",
        comment: "I am First Comment"
    },
    {
        username: "Second",
        comment: "I am Second Comment",
        replies: [
            {
                username: "First",
                comment: "I am First Comment"
            },
            {
                username: "Second",
                comment: "I am Second Comment"
            },
            {
                username: "Third",
                comment: "I am Third Comment",
                replies: [
                    {
                        username: "First",
                        comment: "I am First Comment",
                        replies: [
                            {
                                username: "First",
                                comment: "I am First Comment"
                            },
                            {
                                username: "Second",
                                comment: "I am Second Comment"
                            }
                        ]

                    },
                    {
                        username: "Second",
                        comment: "I am Second Comment"
                    },
                ]

            },
        ]
    },
    {
        username: "Third",
        comment: "I am Third Comment"
    },
];