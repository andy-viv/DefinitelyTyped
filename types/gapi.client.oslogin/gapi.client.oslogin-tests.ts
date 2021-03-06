/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('oslogin', 'v1alpha', () => {
        /** now we can use gapi.client.oslogin */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
            /** View and manage your Google Compute Engine resources */
            'https://www.googleapis.com/auth/compute',
            /** View your Google Compute Engine resources */
            'https://www.googleapis.com/auth/compute.readonly',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Retrieves the profile information used for logging in to a virtual machine
         * on Google Compute Engine.
         */
        await gapi.client.users.getLoginProfile({
            name: "name",
        });
        /**
         * Adds an SSH public key and returns the profile information. Default POSIX
         * account information is set when no username and UID exist as part of the
         * login profile.
         */
        await gapi.client.users.importSshPublicKey({
            parent: "parent",
        });
    }
});
