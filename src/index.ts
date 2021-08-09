import { JsonObject, Merge, MergeExclusive } from 'type-fest';

/*
 *     Access Management
 *         GET /api_version
 *         GET /request_new_permissions
 *         GET /session_key
 *         GET /verify_access_key
 *         GET /get_services
 *     Adding Files
 *         POST /add_files/add_file
 *         POST /add_files/delete_files
 *         POST /add_files/undelete_files
 *         POST /add_files/archive_files
 *         POST /add_files/unarchive_files
 *     Adding Tags
 *         GET /add_tags/clean_tags
 *         GET /add_tags/get_tag_services (legacy)
 *         POST /add_tags/add_tags
 *         Adding URLs
 *         GET /add_urls/get_url_files
 *         GET /add_urls/get_url_info
 *         POST /add_urls/add_url
 *         POST /add_urls/associate_url
 *     Managing Cookies and HTTP Headers
 *         GET /manage_cookies/get_cookies
 *         POST /manage_cookies/set_cookies
 *         POST /manage_headers/set_user_agent
 *     Managing Pages
 *         GET /manage_pages/get_pages
 *         GET /manage_pages/get_page_info
 *         POST /manage_pages/add_files
 *         POST /manage_pages/focus_page
 *     Searching and Fetching Files
 *         GET /get_files/search_files
 *         GET /get_files/file_metadata
 *         GET /get_files/file
 *         GET /get_files/thumbnail
 *     Managing the Database
 *         POST /manage_database/lock_on
 *         POST /manage_database/lock_off
 */

/* can't do compile time checking that an array has elements and autogenerate a guard for it
 * without literal pages of complete garbage code, and it brings the VS live typechecking to
 * a complete halt, plus this will have a helper function to convert to it anyway, so IDRC. */
/**/export type each_possbile_hydrus_permissions_as_either = {
    hydrus_permission_import_urls: boolean,
    hydrus_permission_import_files: boolean,
    hydrus_permission_add_tags: boolean,
    hydrus_permission_search_for_files: boolean,
    hydrus_permission_manage_pages: boolean,
    hydrus_permission_manage_cookies: boolean,
    hydrus_permission_manage_database: boolean;
};


/**/export type hydrus_gallery_downloader_page = {
    name: string,
    page_key: string,
    page_type: 1,
    selected: boolean,
};
/**/export type hydrus_simple_downloader_page = {
    name: string,
    page_key: string,
    page_type: 2,
    selected: boolean,
};
/**/export type hydrus_hard_drive_import_page = {
    name: string,
    page_key: string,
    page_type: 3,
    selected: boolean,
};
/**/export type hydrus_petitions_page = {
    name: string,
    page_key: string,
    page_type: 5,
    selected: boolean,
};
/**/export type hydrus_file_search_page = {
    name: string,
    page_key: string,
    page_type: 6,
    selected: boolean,
};
/**/export type hydrus_URL_downloader_page = {
    name: string,
    page_key: string,
    page_type: 7,
    selected: boolean,
};
/**/export type hydrus_duplicates_page = {
    name: string,
    page_key: string,
    page_type: 8,
    selected: boolean,
};
/**/export type hydrus_thread_watcher_page = {
    name: string,
    page_key: string,
    page_type: 9,
    selected: boolean,
};
/**/export type hydrus_page_of_pages_page = {
    name: string,
    page_key: string,
    page_type: 10,
    selected: boolean,
    pages: Array<hydrus_gallery_downloader_page
        | hydrus_simple_downloader_page
        | hydrus_hard_drive_import_page
        | hydrus_petitions_page
        | hydrus_file_search_page
        | hydrus_URL_downloader_page
        | hydrus_duplicates_page
        | hydrus_thread_watcher_page
        | hydrus_page_of_pages_page>; /*put this at the end, if it's first checked without page_type check we hit infinite recursion in gen'd typechecks*/
};


/**/export type get_metadata_types = { "0": Array<string>; } | { "1": Array<string>; } | { "2": Array<string>; } | { "3": Array<string>; };



/*part of a custom API call that apes the existing returns - maybe split off defs vs DRY? 
 * IDK, it doesn't matter anyway, this is just for neater naming in VS */


/**/export type get_api_version_prereqs = each_possbile_hydrus_permissions_as_either;
/**/export type get_api_version_headers = { "Hydrus-Client-API-Access-Key"?: string; };
/**/export type get_api_version_arguments = undefined;
/**/export type get_api_version_body = undefined;
/**/export type get_api_version_send = {
    headers: get_api_version_headers,
    arguments: get_api_version_arguments,
    body: get_api_version_body;
};
/**/export type get_api_version_recieve = {
    "version": number,
    "hydrus_version": number;
};


/**/export type get_request_new_permissions_prereqs = each_possbile_hydrus_permissions_as_either;
/**/export type get_request_new_permissions_headers = { name: string, basic_permissions: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>; };
/**/export type get_request_new_permissions_arguments = undefined;
/**/export type get_request_new_permissions_body = undefined;
/**/export type get_request_new_permissions_send = {
    headers: get_request_new_permissions_headers,
    arguments: get_request_new_permissions_arguments,
    body: get_request_new_permissions_body;
};
/**/export type get_request_new_permissions_recieve = { "access_key": string; };


/**/export type get_session_key_prereqs = each_possbile_hydrus_permissions_as_either;
/**/export type get_session_key_headers = { "Hydrus-Client-API-Access-Key"?: string; };
/**/export type get_session_key_arguments = undefined;
/**/export type get_session_key_body = undefined;
/**/export type get_session_key_send = {
    headers: get_session_key_headers,
    arguments: get_session_key_arguments,
    body: get_session_key_body;
};
/**/export type get_session_key_recieve = { "session_key": string; };


/**/export type get_verify_access_key_prereqs = each_possbile_hydrus_permissions_as_either;
/**/export type get_verify_access_key_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_verify_access_key_arguments = undefined;
/**/export type get_verify_access_key_body = undefined;
/**/export type get_verify_access_key_send = {
    headers: get_verify_access_key_headers,
    arguments: get_verify_access_key_arguments,
    body: get_verify_access_key_body;
};
/**/export type get_verify_access_key_recieve = {
    "basic_permissions": Array<0 | 1 | 2 | 3 | 4 | 5 | 6>,
    "human_description": string;
};


/**/export type get_services_prereqs = Merge<each_possbile_hydrus_permissions_as_either, ({ hydrus_permission_import_files: true; } | { hydrus_permission_add_tags: true; } | { hydrus_permission_manage_pages: true; } | { hydrus_permission_search_for_files: true; })>;
/**/export type get_services_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_services_arguments = undefined;
/**/export type get_services_body = undefined;
/**/export type get_services_send = {
    headers: get_services_headers,
    arguments: get_services_arguments,
    body: get_services_body;
};
/**/export type get_services_recieve = {
    [index: string]: Array<{
        "name": string,
        "service_key": string;
    }>;
};


/**/export type post_add_files_add_file_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_files: true; }>;
/**/export type post_add_files_add_file_headers = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json" | "application/octet-stream"; };
/**/export type post_add_files_add_file_headers_json = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json"; };
/**/export type post_add_files_add_file_headers_stream = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/octet-stream"; };
/**/export type post_add_files_add_file_arguments = undefined;
/**/export type post_add_files_add_file_body = { "path": string; } | Buffer;
/**/export type post_add_files_add_file_send =
    Merge<{
        arguments: post_add_files_add_file_arguments,
    },
        MergeExclusive<{
            headers: post_add_files_add_file_headers_json,
            body: Exclude<post_add_files_add_file_body, Buffer>;
        }, {
            headers: post_add_files_add_file_headers_stream,
            body: Exclude<post_add_files_add_file_body, { "path": string; }>;
        }>>;
/**/export type post_add_files_add_file_recieve = {
            status: 1 | 2 | 3 | 4 | 5,
            hash: string,
            note: string;
        };


/**/export type post_add_files_delete_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_files: true; }>;
/**/export type post_add_files_delete_files_headers = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json"; };
/**/export type post_add_files_delete_files_arguments = undefined;
/**/export type post_add_files_delete_files_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; })
/**/export type post_add_files_delete_files_send = {
            headers: post_add_files_delete_files_headers,
            arguments: post_add_files_delete_files_arguments,
            body: post_add_files_delete_files_body;
        };
/**/export type post_add_files_delete_files_recieve = undefined;


/**/export type post_add_files_undelete_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_files: true; }>;
/**/export type post_add_files_undelete_files_headers = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json"; };
/**/export type post_add_files_undelete_files_arguments = undefined;
/**/export type post_add_files_undelete_files_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; })
/**/export type post_add_files_undelete_files_send = {
            headers: post_add_files_undelete_files_headers,
            arguments: post_add_files_undelete_files_arguments,
            body: post_add_files_undelete_files_body;
        };
/**/export type post_add_files_undelete_files_recieve = undefined;


/**/export type post_add_files_archive_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_files: true; }>;
/**/export type post_add_files_archive_files_headers = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json"; };
/**/export type post_add_files_archive_files_arguments = undefined;
/**/export type post_add_files_archive_files_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; })
/**/export type post_add_files_archive_files_send = {
            headers: post_add_files_archive_files_headers,
            arguments: post_add_files_archive_files_arguments,
            body: post_add_files_archive_files_body;
        };
/**/export type post_add_files_archive_files_recieve = undefined;


/**/export type post_add_files_unarchive_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_files: true; }>;
/**/export type post_add_files_unarchive_files_headers = { "Hydrus-Client-API-Access-Key": string; "Content-Type": "application/json"; };
/**/export type post_add_files_unarchive_files_arguments = undefined;
/**/export type post_add_files_unarchive_files_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; })
/**/export type post_add_files_unarchive_files_send = {
            headers: post_add_files_unarchive_files_headers,
            arguments: post_add_files_unarchive_files_arguments,
            body: post_add_files_unarchive_files_body;
        };
/**/export type post_add_files_unarchive_files_recieve = undefined;


/**/export type get_add_tags_clean_tags_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_add_tags: true; }>;
/**/export type get_add_tags_clean_tags_headers = { "Hydrus-Client-API-Access-Key": string; };
/**
 * @see tag array contents should not contain hyphen prefixes or match "system:*" 
 */
/**/export type get_add_tags_clean_tags_arguments = { tags: Array<string>; };
/**/export type get_add_tags_clean_tags_body = undefined;
/**/export type get_add_tags_clean_tags_send = {
            headers: get_add_tags_clean_tags_headers,
            arguments: get_add_tags_clean_tags_arguments,
            body: get_add_tags_clean_tags_body;
        };
/**/export type get_add_tags_clean_tags_recieve = { tags: Array<string>; };

/**
 * @deprecated this API endpoint is deprecated, plus why bother?
 */
/**/export type get_add_tags_get_tag_services_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_add_tags: true; }>;
/**/export type get_add_tags_get_tag_services_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_add_tags_get_tag_services_arguments = undefined;
/**/export type get_add_tags_get_tag_services_body = undefined;
/**/export type get_add_tags_get_tag_services_send = {
            headers: get_add_tags_get_tag_services_headers,
            arguments: get_add_tags_get_tag_services_arguments,
            body: get_add_tags_get_tag_services_body;
        };
/**/export type get_add_tags_get_tag_services_recieve = {
            "local_tags"?: Array<string>,
            "tag_repositories"?: Array<string>;
        };


/**/export type post_add_tags_add_tags_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_add_tags: true; }>;
/**/export type post_add_tags_add_tags_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type post_add_tags_add_tags_arguments = undefined;
/**/export type post_add_tags_add_tags_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; }) & ({ service_names_to_tags: { [index: string]: Array<string>; }; service_names_to_actions_to_tags: never; } | { service_names_to_tags: never; service_names_to_actions_to_tags: MergeExclusive<{ [index: string]: { "0": Array<string>; } | { "1": Array<string>; }; }, { [index: string]: { "2": Array<string>; } | { "3": Array<string>; } | { "4": Array<[string, string]>; } | { "5": Array<string>; }; }>; });
/**/export type post_add_tags_add_tags_send = {
            headers: post_add_tags_add_tags_headers,
            arguments: post_add_tags_add_tags_arguments,
            body: post_add_tags_add_tags_body;
        };
/**/export type post_add_tags_add_tags_recieve = undefined;

/**/export type get_add_urls_get_url_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_urls: true; }>;
/**/export type get_add_urls_get_url_files_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_add_urls_get_url_files_arguments = { url: string; };
/**/export type get_add_urls_get_url_files_body = undefined;
/**/export type get_add_urls_get_url_files_send = {
            headers: get_add_urls_get_url_files_headers,
            arguments: get_add_urls_get_url_files_arguments,
            body: get_add_urls_get_url_files_body;
        };
/**/export type get_add_urls_get_url_files_recieve = {
            normalised_url: string, url_file_statuses: Array<{
                hash: string,
                note: string,
                status: 0 | 1 | 2;
            }>;
        };


/**/export type get_add_urls_get_url_info_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_urls: true; }>;
/**/export type get_add_urls_get_url_info_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_add_urls_get_url_info_arguments = { url: string; };
/**/export type get_add_urls_get_url_info_body = undefined;
/**/export type get_add_urls_get_url_info_send = {
            headers: get_add_urls_get_url_info_headers,
            arguments: get_add_urls_get_url_info_arguments,
            body: get_add_urls_get_url_info_body;
        };
/**/export type get_add_urls_get_url_info_recieve = {
            normalised_url: string,
            url_type: 0 | 2 | 3 | 4 | 5;
            url_type_string: string,
            match_name: string,
            can_parse: boolean;
        };


/**/export type get_add_urls_add_url_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_urls: true; /*hydrus_permission_add_tags: true;*/ }>;
/**/export type get_add_urls_add_url_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_add_urls_add_url_arguments = undefined;
/**/export type get_add_urls_add_url_body = { url: string, show_destination_page?: boolean, service_names_to_additional_tags?: { [index: string]: Array<string>; }, /*needs add_tags permission*/ filterable_tags?: Array<string>; } & ({ destination_page_name?: string; destination_page_key?: never; } | { destination_page_key?: string; destination_page_name?: never; });
/**/export type get_add_urls_add_url_send = {
            headers: get_add_urls_add_url_headers,
            arguments: get_add_urls_add_url_arguments,
            body: get_add_urls_add_url_body;
        };
/**/export type get_add_urls_add_url_recieve = {
            "human_result_text": string,
            "normalized_url": string;
        };


/**/export type post_add_urls_associate_url_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_import_urls: true; }>;
/**/export type post_add_urls_associate_url_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type post_add_urls_associate_url_arguments = undefined;
/**/export type post_add_urls_associate_url_body = ({ hash: string; hashes: never; } | { hashes: Array<string>; hash: never; }) & (
    ({ url_to_add: string; urls_to_add: never; }
        | { urls_to_add: Array<string>; url_to_add: never; })
    | ({ url_to_delete: string; urls_to_delete: never; }
        | { urls_to_delete: Array<string>; url_to_delete: never; })
);
/**/export type post_add_urls_associate_url_send = {
    headers: post_add_urls_associate_url_headers,
    arguments: post_add_urls_associate_url_arguments,
    body: post_add_urls_associate_url_body;
};
/**/export type post_add_urls_associate_url_recieve = undefined;


/**/export type get_manage_cookies_get_cookies_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_cookies: true; }>;
/**/export type get_manage_cookies_get_cookies_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_manage_cookies_get_cookies_arguments = { domain: string; };
/**/export type get_manage_cookies_get_cookies_body = undefined;
/**/export type get_manage_cookies_get_cookies_send = {
    headers: get_manage_cookies_get_cookies_headers,
    arguments: get_manage_cookies_get_cookies_arguments,
    body: get_manage_cookies_get_cookies_body;
};
///**/export type get_manage_cookies_get_cookies_recieve = { cookies: Array<[string, string, string, string, number | null]>; };


/**/export type post_manage_cookies_set_cookies_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_cookies: true; }>;
/**/export type post_manage_cookies_set_cookies_headers = {
    "Hydrus-Client-API-Access-Key": string,
    "Content-Type": "application/json";
};
/**/export type post_manage_cookies_set_cookies_arguments = undefined;
///**/export type post_manage_cookies_set_cookies_body = { cookies: Array<[string, string | null, string, string, number | null]>; };
///**/export type post_manage_cookies_set_cookies_send = {
//        headers: post_manage_cookies_set_cookies_headers,
//        arguments: post_manage_cookies_set_cookies_arguments,
//        body: post_manage_cookies_set_cookies_body;
//    };
/**/export type post_manage_cookies_set_cookies_recieve = undefined;


/**/export type post_manage_headers_set_user_agent_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_cookies: true; }>;
/**/export type post_manage_headers_set_user_agent_headers = {
    "Hydrus-Client-API-Access-Key": string,
    "Content-Type": "application/json";
};
/**/export type post_manage_headers_set_user_agent_arguments = undefined;
/**/export type post_manage_headers_set_user_agent_body = { "user-agent": string; };
/**/export type post_manage_headers_set_user_agent_send = {
    headers: post_manage_headers_set_user_agent_headers,
    arguments: post_manage_headers_set_user_agent_arguments,
    body: post_manage_headers_set_user_agent_body;
};

/**/export type post_manage_headers_set_user_agent_recieve = undefined;



/**/export type get_manage_pages_get_pages_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_pages: true; }>;
/**/export type get_manage_pages_get_pages_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_manage_pages_get_pages_arguments = undefined;
/**/export type get_manage_pages_get_pages_body = undefined;
/**/export type get_manage_pages_get_pages_send = {
    headers: get_manage_pages_get_pages_headers,
    arguments: get_manage_pages_get_pages_arguments,
    body: get_manage_pages_get_pages_body;
};
/**/export type get_manage_pages_get_pages_recieve = {
    pages: hydrus_gallery_downloader_page
    | hydrus_simple_downloader_page
    | hydrus_hard_drive_import_page
    | hydrus_petitions_page
    | hydrus_file_search_page
    | hydrus_URL_downloader_page
    | hydrus_duplicates_page
    | hydrus_thread_watcher_page
    | hydrus_page_of_pages_page;
};


/* WIP API ENDPOINT!!! 
 * MAY CHANGE IN FUTURE API REVISIONS! 
 * NO WARRANTY, SLIPPERY WHEN WET, NOT FOR USE IN DIAGNOSTIC PROCEDURES, ETC. */
/**/export type get_manage_pages_get_page_info_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_pages: true; }>;
/**/export type get_manage_pages_get_page_info_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_manage_pages_get_page_info_arguments = undefined;
/**/export type get_manage_pages_get_page_info_body = undefined;
/**/export type get_manage_pages_get_page_info_send = {
    headers: get_manage_pages_get_page_info_headers,
    arguments: get_manage_pages_get_page_info_arguments,
    body: get_manage_pages_get_page_info_body;
};
/**/export type get_manage_pages_get_page_info_recieve = JsonObject;
/* not normally supposed to directly return a JsonObject type since then the user has to recast it, but we have no
 * earthly idea what this is so it's on the caller to parse it anyway, so in this case we actually do want to just 
 * return a JsonObject. All we know is it was valid JSON; if they want to keep up with this API they can type the
 * parts they want and ignore the rest. */


/**/export type post_manage_pages_add_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_pages: true; }>;
/**/export type post_manage_pages_add_files_headers = {
    "Hydrus-Client-API-Access-Key": string,
    "Content-Type": "application/json";
};
/**/export type post_manage_pages_add_files_arguments = undefined;
/**/export type post_manage_pages_add_files_body = { page_key: string; } & ({ file_ids: Array<number>; hashes: never; } | { hashes: Array<string>; file_ids: never; });
/**/export type post_manage_pages_add_files_send = {
    headers: post_manage_pages_add_files_headers,
    arguments: post_manage_pages_add_files_arguments,
    body: post_manage_pages_add_files_body;
};
/**/export type post_manage_pages_add_files_recieve = undefined;


/**/export type get_get_files_search_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_search_for_files: true; }>;
/**/export type get_get_files_search_files_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_get_files_search_files_arguments = {
    tags: string,
    system_inbox: never, /*deprecated, use tag "system:inbox"*/
    system_archive: never; /*deprecated, use tag "system:archive"*/
};
/**/export type get_get_files_search_files_body = undefined;
/**/export type get_get_files_search_files_send = {
    headers: get_get_files_search_files_headers,
    arguments: get_get_files_search_files_arguments,
    body: get_get_files_search_files_body;
};
/**/export type get_get_files_search_files_recieve = { file_ids: Array<number>; };


/**/export type get_get_files_file_metadata_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_search_for_files: true; }>;
/**/export type get_get_files_file_metadata_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_get_files_file_metadata_arguments =
    {
        only_return_identifiers?: boolean,
        detailed_url_information?: boolean;
    } & (
        {
            file_ids: Array<number>, /*if restricted by tags, file_ids MUST be in most recent search*/
            hashes: never;
        } | {
            hashes: Array<string>; /*doesn't work if you are restricted by tags*/
            file_ids: never;
        }
    );


/**/export type get_get_files_file_metadata_body = undefined;
/**/export type get_get_files_file_metadata_send = {
        headers: get_get_files_file_metadata_headers,
        arguments: get_get_files_file_metadata_arguments,
        body: get_get_files_file_metadata_body;
    };
/**/export type get_get_files_file_metadata_recieve = {
        metadata: Array<
            {
                file_id: number,
                hash: string,
                size: number,
                mime: string,
                ext: string,
                width: number,
                height: number,
                duration: null | number,
                has_audio: boolean,
                num_frames: null | number,
                num_words: null | number,
                is_inbox: boolean,
                is_local: boolean,
                is_trashed: boolean,
                known_urls: Array<string>,
                service_names_to_statuses_to_tags: {[index:string]:get_metadata_types},
                service_names_to_statuses_to_display_tags: { [index: string]: get_metadata_types; },
                detailed_known_urls?: Array<get_add_urls_get_url_info_recieve>;
            }>;
    };


/**/export type get_get_files_file_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_search_for_files: true; }>;
/**/export type get_get_files_file_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_get_files_file_arguments = { file_id: number; hash: never; } | { hash: string; file_id: never; };
/**/export type get_get_files_file_body = undefined;
/**/export type get_get_files_file_send = {
        headers: get_get_files_file_headers,
        arguments: get_get_files_file_arguments,
        body: get_get_files_file_body;
    };
///**/export type get_get_files_file_recieve = any;
/* different libraries may return buffer etc. It's a file, "type as" to match.
 * Returns mime type in Content-Type header of response */



/**/export type get_get_files_thumbnail_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_search_for_files: true; }>;
/**/export type get_get_files_thumbnail_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type get_get_files_thumbnail_arguments = { file_id: number; hash: never; } | { hash: string; file_id: never; };
/**/export type get_get_files_thumbnail_body = undefined;
/**/export type get_get_files_thumbnail_send = {
        headers: get_get_files_thumbnail_headers,
        arguments: get_get_files_thumbnail_arguments,
        body: get_get_files_thumbnail_body;
    };
///**/export type get_get_files_thumbnail_recieve = any;
/* different libraries may return buffer etc. It's a png or jpeg, "type as" to match.
 * Returns "application/octet-stream" as Content-Type header of response, may be jpeg or png */


/**/export type post_manage_database_lock_on_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_database: true; }>;
/**/export type post_manage_database_lock_on_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type post_manage_database_lock_on_arguments = undefined;
/**/export type post_manage_database_lock_on_body = undefined;
/**/export type post_manage_database_lock_on_send = {
        headers: post_manage_database_lock_on_headers,
        arguments: post_manage_database_lock_on_arguments,
        body: post_manage_database_lock_on_body;
    };
/**/export type post_manage_database_lock_on_recieve = undefined;


/**/export type post_manage_database_lock_off_prereqs = Merge<each_possbile_hydrus_permissions_as_either, { hydrus_permission_manage_database: true; }>;
/**/export type post_manage_database_lock_off_headers = { "Hydrus-Client-API-Access-Key": string; };
/**/export type post_manage_database_lock_off_arguments = undefined;
/**/export type post_manage_database_lock_off_body = undefined;
/**/export type post_manage_database_lock_off_send = {
        headers: post_manage_database_lock_off_headers,
        arguments: post_manage_database_lock_off_arguments,
        body: post_manage_database_lock_off_body;
    };
/**/export type post_manage_database_lock_off_recieve = undefined;