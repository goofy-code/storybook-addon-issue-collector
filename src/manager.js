import React from 'react';

import { addons, types, useParameter } from '@storybook/manager-api';

import { AddonPanel } from '@storybook/components';
import { Select } from './components/select/select';
import { LinkButton } from './components/link-button/link-buttons';
import { Input } from './components/input/input';

const ADDON_ID = 'storybook-addon-issue-collector';
const PANEL_ID = `${ADDON_ID}/panel`;

const CollectorCreateLink = ({ baseUrl, issueArguments, label }) => {
    return <LinkButton target="_blank" href={`${baseUrl}?${issueArguments}`} label={label} />;
};

const valuesToSelectOptions = (values) => {
    return values.map((v) => {
        return { value: v.id, label: v.name };
    });
};

const SelectComponent = ({ label, options, value, onChange }) => {
    return <Select options={options} label={label} value={value} onChange={onChange} />;
};

const SelectIssueType = ({ label, options, value, onChange }) => {
    return <Select options={options} label={label} value={value} onChange={onChange} />;
};

const Reporter = ({ label, value, onChange }) => {
    return <Input label={label} value={value} onChange={onChange} />;
};

const MyPanel = () => {
    const config = useParameter('issueCollector', {
        settings: {},
        components: [],
        issueTypes: [],
        additionalQueryArgs: {},
    });

    const configIsInvalid =
        !config.settings ||
        !config.settings?.create ||
        !config?.components ||
        !config?.issueTypes ||
        config.components.length === 0 ||
        config.issueTypes.length === 0;

    const [selectedComponent, setComponent] = React.useState(config.components[0]?.id);
    const [selectedIssueType, setIssueType] = React.useState(config.issueTypes[0]?.id);
    const [selectedReporter, setReporter] = React.useState('');

    if (configIsInvalid) {
        return <></>;
    }

    const getArguments = () => {
        config.additionalQueryArgs.components = selectedComponent || config.components[0]?.id;
        config.additionalQueryArgs.issuetype = selectedIssueType || config.issueTypes[0]?.id;
        config.additionalQueryArgs.reporter = selectedReporter || '';

        return Object.keys(config.additionalQueryArgs)
            .map((k) => `${k}=${config.additionalQueryArgs[k]}`)
            .join('&');
    };

    const selectComponent = (event) => {
        setComponent(event.target.value);
    };

    const selectIssueType = (event) => {
        setIssueType(event.target.value);
    };

    const selectReporter = (event) => {
        setReporter(event.target.value);
    };

    const stylesRow = {
        display: 'flex',
        gap: '20px',
        marginTop: '5px',
        marginBottom: '10px',
    };

    return (
        <>
            <div>
                <div style={stylesRow}>
                    <Reporter label={'Reporter'} value={selectedReporter} onChange={selectReporter} />
                    <SelectIssueType
                        label={'Issue Type'}
                        options={valuesToSelectOptions(config.issueTypes)}
                        value={selectedIssueType}
                        onChange={selectIssueType}
                    />

                    <SelectComponent
                        label={'Component'}
                        options={valuesToSelectOptions(config.components)}
                        value={selectedComponent}
                        onChange={selectComponent}
                    />
                </div>
            </div>
            <div style={stylesRow} className={'row'}>
                <CollectorCreateLink
                    baseUrl={config.settings.create.baseUrl}
                    label={config.settings.create.label}
                    issueArguments={getArguments()}
                />
            </div>
        </>
    );
};

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Create Issue',
        render: (props) => (
            <AddonPanel {...props}>
                <MyPanel />
            </AddonPanel>
        ),
        paramKey: 'issueCollector',
    });
});
