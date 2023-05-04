/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        issueCollector: {
            settings: {
                create: {
                    label: 'Create issue',
                    baseUrl: '[URL]',
                },
            },
            components: [
                {
                    id: '1',
                    name: 'Component A',
                },
                {
                    id: '2',
                    name: 'Component B',
                },
            ],
            issueTypes: [
                {
                    id: 1,
                    name: 'Bug',
                },
                {
                    id: 2,
                    name: 'Task',
                },
            ],
            additionalQueryArgs: { projectKey: 'PRJ', pid: '1' },
        },
    },
};

export default preview;
