/// <reference types="node" />
import { JsonObject, Merge, MergeExclusive } from 'type-fest';
export declare type each_possbile_hydrus_permissions_as_either = {
    hydrus_permission_import_urls: boolean;
    hydrus_permission_import_files: boolean;
    hydrus_permission_add_tags: boolean;
    hydrus_permission_search_for_files: boolean;
    hydrus_permission_manage_pages: boolean;
    hydrus_permission_manage_cookies: boolean;
    hydrus_permission_manage_database: boolean;
};
export declare type hydrus_gallery_downloader_page = {
    name: string;
    page_key: string;
    page_type: 1;
    selected: boolean;
};
export declare type hydrus_simple_downloader_page = {
    name: string;
    page_key: string;
    page_type: 2;
    selected: boolean;
};
export declare type hydrus_hard_drive_import_page = {
    name: string;
    page_key: string;
    page_type: 3;
    selected: boolean;
};
export declare type hydrus_petitions_page = {
    name: string;
    page_key: string;
    page_type: 5;
    selected: boolean;
};
export declare type hydrus_file_search_page = {
    name: string;
    page_key: string;
    page_type: 6;
    selected: boolean;
};
export declare type hydrus_URL_downloader_page = {
    name: string;
    page_key: string;
    page_type: 7;
    selected: boolean;
};
export declare type hydrus_duplicates_page = {
    name: string;
    page_key: string;
    page_type: 8;
    selected: boolean;
};
export declare type hydrus_thread_watcher_page = {
    name: string;
    page_key: string;
    page_type: 9;
    selected: boolean;
};
export declare type hydrus_page_of_pages_page = {
    name: string;
    page_key: string;
    page_type: 10;
    selected: boolean;
    pages: Array<hydrus_gallery_downloader_page | hydrus_simple_downloader_page | hydrus_hard_drive_import_page | hydrus_petitions_page | hydrus_file_search_page | hydrus_URL_downloader_page | hydrus_duplicates_page | hydrus_thread_watcher_page | hydrus_page_of_pages_page>;
};
export declare type get_metadata_types = {
    "0": Array<string>;
} | {
    "1": Array<string>;
} | {
    "2": Array<string>;
} | {
    "3": Array<string>;
};
export declare type get_api_version_prereqs = each_possbile_hydrus_permissions_as_either;
export declare type get_api_version_headers = {
    "Hydrus-Client-API-Access-Key"?: string;
};
export declare type get_api_version_arguments = undefined;
export declare type get_api_version_body = undefined;
export declare type get_api_version_send = {
    headers: get_api_version_headers;
    arguments: get_api_version_arguments;
    body: get_api_version_body;
};
export declare type get_api_version_recieve = {
    "version": number;
    "hydrus_version": number;
};
export declare type get_request_new_permissions_prereqs = each_possbile_hydrus_permissions_as_either;
export declare type get_request_new_permissions_headers = {
    name: string;
    basic_permissions: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
};
export declare type get_request_new_permissions_arguments = undefined;
export declare type get_request_new_permissions_body = undefined;
export declare type get_request_new_permissions_send = {
    headers: get_request_new_permissions_headers;
    arguments: get_request_new_permissions_arguments;
    body: get_request_new_permissions_body;
};
export declare type get_request_new_permissions_recieve = {
    "access_key": string;
};
export declare type get_session_key_prereqs = each_possbile_hydrus_permissions_as_either;
export declare type get_session_key_headers = {
    "Hydrus-Client-API-Access-Key"?: string;
};
export declare type get_session_key_arguments = undefined;
export declare type get_session_key_body = undefined;
export declare type get_session_key_send = {
    headers: get_session_key_headers;
    arguments: get_session_key_arguments;
    body: get_session_key_body;
};
export declare type get_session_key_recieve = {
    "session_key": string;
};
export declare type get_verify_access_key_prereqs = each_possbile_hydrus_permissions_as_either;
export declare type get_verify_access_key_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_verify_access_key_arguments = undefined;
export declare type get_verify_access_key_body = undefined;
export declare type get_verify_access_key_send = {
    headers: get_verify_access_key_headers;
    arguments: get_verify_access_key_arguments;
    body: get_verify_access_key_body;
};
export declare type get_verify_access_key_recieve = {
    "basic_permissions": Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    "human_description": string;
};
export declare type get_services_prereqs = Merge<each_possbile_hydrus_permissions_as_either, ({
    hydrus_permission_import_files: true;
} | {
    hydrus_permission_add_tags: true;
} | {
    hydrus_permission_manage_pages: true;
} | {
    hydrus_permission_search_for_files: true;
})>;
export declare type get_services_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_services_arguments = undefined;
export declare type get_services_body = undefined;
export declare type get_services_send = {
    headers: get_services_headers;
    arguments: get_services_arguments;
    body: get_services_body;
};
export declare type get_services_recieve = {
    [index: string]: Array<{
        "name": string;
        "service_key": string;
    }>;
};
export declare type post_add_files_add_file_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_files: true;
}>;
export declare type post_add_files_add_file_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json" | "application/octet-stream";
};
export declare type post_add_files_add_file_headers_json = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_add_files_add_file_headers_stream = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/octet-stream";
};
export declare type post_add_files_add_file_arguments = undefined;
export declare type post_add_files_add_file_body = {
    "path": string;
} | Buffer;
export declare type post_add_files_add_file_send = Merge<{
    arguments: post_add_files_add_file_arguments;
}, MergeExclusive<{
    headers: post_add_files_add_file_headers_json;
    body: Exclude<post_add_files_add_file_body, Buffer>;
}, {
    headers: post_add_files_add_file_headers_stream;
    body: Exclude<post_add_files_add_file_body, {
        "path": string;
    }>;
}>>;
export declare type post_add_files_add_file_recieve = {
    status: 1 | 2 | 3 | 4 | 5;
    hash: string;
    note: string;
};
export declare type post_add_files_delete_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_files: true;
}>;
export declare type post_add_files_delete_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_add_files_delete_files_arguments = undefined;
export declare type post_add_files_delete_files_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
});
export declare type post_add_files_delete_files_send = {
    headers: post_add_files_delete_files_headers;
    arguments: post_add_files_delete_files_arguments;
    body: post_add_files_delete_files_body;
};
export declare type post_add_files_delete_files_recieve = undefined;
export declare type post_add_files_undelete_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_files: true;
}>;
export declare type post_add_files_undelete_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_add_files_undelete_files_arguments = undefined;
export declare type post_add_files_undelete_files_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
});
export declare type post_add_files_undelete_files_send = {
    headers: post_add_files_undelete_files_headers;
    arguments: post_add_files_undelete_files_arguments;
    body: post_add_files_undelete_files_body;
};
export declare type post_add_files_undelete_files_recieve = undefined;
export declare type post_add_files_archive_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_files: true;
}>;
export declare type post_add_files_archive_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_add_files_archive_files_arguments = undefined;
export declare type post_add_files_archive_files_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
});
export declare type post_add_files_archive_files_send = {
    headers: post_add_files_archive_files_headers;
    arguments: post_add_files_archive_files_arguments;
    body: post_add_files_archive_files_body;
};
export declare type post_add_files_archive_files_recieve = undefined;
export declare type post_add_files_unarchive_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_files: true;
}>;
export declare type post_add_files_unarchive_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_add_files_unarchive_files_arguments = undefined;
export declare type post_add_files_unarchive_files_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
});
export declare type post_add_files_unarchive_files_send = {
    headers: post_add_files_unarchive_files_headers;
    arguments: post_add_files_unarchive_files_arguments;
    body: post_add_files_unarchive_files_body;
};
export declare type post_add_files_unarchive_files_recieve = undefined;
export declare type get_add_tags_clean_tags_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_add_tags: true;
}>;
export declare type get_add_tags_clean_tags_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_add_tags_clean_tags_arguments = {
    tags: Array<string>;
};
export declare type get_add_tags_clean_tags_body = undefined;
export declare type get_add_tags_clean_tags_send = {
    headers: get_add_tags_clean_tags_headers;
    arguments: get_add_tags_clean_tags_arguments;
    body: get_add_tags_clean_tags_body;
};
export declare type get_add_tags_clean_tags_recieve = {
    tags: Array<string>;
};
export declare type get_add_tags_get_tag_services_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_add_tags: true;
}>;
export declare type get_add_tags_get_tag_services_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_add_tags_get_tag_services_arguments = undefined;
export declare type get_add_tags_get_tag_services_body = undefined;
export declare type get_add_tags_get_tag_services_send = {
    headers: get_add_tags_get_tag_services_headers;
    arguments: get_add_tags_get_tag_services_arguments;
    body: get_add_tags_get_tag_services_body;
};
export declare type get_add_tags_get_tag_services_recieve = {
    "local_tags"?: Array<string>;
    "tag_repositories"?: Array<string>;
};
export declare type post_add_tags_add_tags_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_add_tags: true;
}>;
export declare type post_add_tags_add_tags_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type post_add_tags_add_tags_arguments = undefined;
export declare type post_add_tags_add_tags_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
}) & ({
    service_names_to_tags: {
        [index: string]: Array<string>;
    };
    service_names_to_actions_to_tags: never;
} | {
    service_names_to_tags: never;
    service_names_to_actions_to_tags: MergeExclusive<{
        [index: string]: {
            "0": Array<string>;
        } | {
            "1": Array<string>;
        };
    }, {
        [index: string]: {
            "2": Array<string>;
        } | {
            "3": Array<string>;
        } | {
            "4": Array<[string, string]>;
        } | {
            "5": Array<string>;
        };
    }>;
});
export declare type post_add_tags_add_tags_send = {
    headers: post_add_tags_add_tags_headers;
    arguments: post_add_tags_add_tags_arguments;
    body: post_add_tags_add_tags_body;
};
export declare type post_add_tags_add_tags_recieve = undefined;
export declare type get_add_urls_get_url_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_urls: true;
}>;
export declare type get_add_urls_get_url_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_add_urls_get_url_files_arguments = {
    url: string;
};
export declare type get_add_urls_get_url_files_body = undefined;
export declare type get_add_urls_get_url_files_send = {
    headers: get_add_urls_get_url_files_headers;
    arguments: get_add_urls_get_url_files_arguments;
    body: get_add_urls_get_url_files_body;
};
export declare type get_add_urls_get_url_files_recieve = {
    normalised_url: string;
    url_file_statuses: Array<{
        hash: string;
        note: string;
        status: 0 | 1 | 2;
    }>;
};
export declare type get_add_urls_get_url_info_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_urls: true;
}>;
export declare type get_add_urls_get_url_info_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_add_urls_get_url_info_arguments = {
    url: string;
};
export declare type get_add_urls_get_url_info_body = undefined;
export declare type get_add_urls_get_url_info_send = {
    headers: get_add_urls_get_url_info_headers;
    arguments: get_add_urls_get_url_info_arguments;
    body: get_add_urls_get_url_info_body;
};
export declare type get_add_urls_get_url_info_recieve = {
    normalised_url: string;
    url_type: 0 | 2 | 3 | 4 | 5;
    url_type_string: string;
    match_name: string;
    can_parse: boolean;
};
export declare type get_add_urls_add_url_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_urls: true;
}>;
export declare type get_add_urls_add_url_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_add_urls_add_url_arguments = undefined;
export declare type get_add_urls_add_url_body = {
    url: string;
    show_destination_page?: boolean;
    service_names_to_additional_tags?: {
        [index: string]: Array<string>;
    };
    filterable_tags?: Array<string>;
} & ({
    destination_page_name?: string;
    destination_page_key?: never;
} | {
    destination_page_key?: string;
    destination_page_name?: never;
});
export declare type get_add_urls_add_url_send = {
    headers: get_add_urls_add_url_headers;
    arguments: get_add_urls_add_url_arguments;
    body: get_add_urls_add_url_body;
};
export declare type get_add_urls_add_url_recieve = {
    "human_result_text": string;
    "normalized_url": string;
};
export declare type post_add_urls_associate_url_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_import_urls: true;
}>;
export declare type post_add_urls_associate_url_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type post_add_urls_associate_url_arguments = undefined;
export declare type post_add_urls_associate_url_body = ({
    hash: string;
    hashes: never;
} | {
    hashes: Array<string>;
    hash: never;
}) & (({
    url_to_add: string;
    urls_to_add: never;
} | {
    urls_to_add: Array<string>;
    url_to_add: never;
}) | ({
    url_to_delete: string;
    urls_to_delete: never;
} | {
    urls_to_delete: Array<string>;
    url_to_delete: never;
}));
export declare type post_add_urls_associate_url_send = {
    headers: post_add_urls_associate_url_headers;
    arguments: post_add_urls_associate_url_arguments;
    body: post_add_urls_associate_url_body;
};
export declare type post_add_urls_associate_url_recieve = undefined;
export declare type get_manage_cookies_get_cookies_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_cookies: true;
}>;
export declare type get_manage_cookies_get_cookies_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_manage_cookies_get_cookies_arguments = {
    domain: string;
};
export declare type get_manage_cookies_get_cookies_body = undefined;
export declare type get_manage_cookies_get_cookies_send = {
    headers: get_manage_cookies_get_cookies_headers;
    arguments: get_manage_cookies_get_cookies_arguments;
    body: get_manage_cookies_get_cookies_body;
};
export declare type post_manage_cookies_set_cookies_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_cookies: true;
}>;
export declare type post_manage_cookies_set_cookies_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_manage_cookies_set_cookies_arguments = undefined;
export declare type post_manage_cookies_set_cookies_recieve = undefined;
export declare type post_manage_headers_set_user_agent_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_cookies: true;
}>;
export declare type post_manage_headers_set_user_agent_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_manage_headers_set_user_agent_arguments = undefined;
export declare type post_manage_headers_set_user_agent_body = {
    "user-agent": string;
};
export declare type post_manage_headers_set_user_agent_send = {
    headers: post_manage_headers_set_user_agent_headers;
    arguments: post_manage_headers_set_user_agent_arguments;
    body: post_manage_headers_set_user_agent_body;
};
export declare type post_manage_headers_set_user_agent_recieve = undefined;
export declare type get_manage_pages_get_pages_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_pages: true;
}>;
export declare type get_manage_pages_get_pages_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_manage_pages_get_pages_arguments = undefined;
export declare type get_manage_pages_get_pages_body = undefined;
export declare type get_manage_pages_get_pages_send = {
    headers: get_manage_pages_get_pages_headers;
    arguments: get_manage_pages_get_pages_arguments;
    body: get_manage_pages_get_pages_body;
};
export declare type get_manage_pages_get_pages_recieve = {
    pages: hydrus_gallery_downloader_page | hydrus_simple_downloader_page | hydrus_hard_drive_import_page | hydrus_petitions_page | hydrus_file_search_page | hydrus_URL_downloader_page | hydrus_duplicates_page | hydrus_thread_watcher_page | hydrus_page_of_pages_page;
};
export declare type get_manage_pages_get_page_info_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_pages: true;
}>;
export declare type get_manage_pages_get_page_info_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_manage_pages_get_page_info_arguments = undefined;
export declare type get_manage_pages_get_page_info_body = undefined;
export declare type get_manage_pages_get_page_info_send = {
    headers: get_manage_pages_get_page_info_headers;
    arguments: get_manage_pages_get_page_info_arguments;
    body: get_manage_pages_get_page_info_body;
};
export declare type get_manage_pages_get_page_info_recieve = JsonObject;
export declare type post_manage_pages_add_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_pages: true;
}>;
export declare type post_manage_pages_add_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
    "Content-Type": "application/json";
};
export declare type post_manage_pages_add_files_arguments = undefined;
export declare type post_manage_pages_add_files_body = {
    page_key: string;
} & ({
    file_ids: Array<number>;
    hashes: never;
} | {
    hashes: Array<string>;
    file_ids: never;
});
export declare type post_manage_pages_add_files_send = {
    headers: post_manage_pages_add_files_headers;
    arguments: post_manage_pages_add_files_arguments;
    body: post_manage_pages_add_files_body;
};
export declare type post_manage_pages_add_files_recieve = undefined;
export declare type get_get_files_search_files_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_search_for_files: true;
}>;
export declare type get_get_files_search_files_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_get_files_search_files_arguments = {
    tags: string;
    system_inbox: never;
    system_archive: never;
};
export declare type get_get_files_search_files_body = undefined;
export declare type get_get_files_search_files_send = {
    headers: get_get_files_search_files_headers;
    arguments: get_get_files_search_files_arguments;
    body: get_get_files_search_files_body;
};
export declare type get_get_files_search_files_recieve = {
    file_ids: Array<number>;
};
export declare type get_get_files_file_metadata_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_search_for_files: true;
}>;
export declare type get_get_files_file_metadata_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_get_files_file_metadata_arguments = {
    only_return_identifiers?: boolean;
    detailed_url_information?: boolean;
} & ({
    file_ids: Array<number>;
    hashes: never;
} | {
    hashes: Array<string>;
    file_ids: never;
});
export declare type get_get_files_file_metadata_body = undefined;
export declare type get_get_files_file_metadata_send = {
    headers: get_get_files_file_metadata_headers;
    arguments: get_get_files_file_metadata_arguments;
    body: get_get_files_file_metadata_body;
};
export declare type get_get_files_file_metadata_recieve = {
    metadata: Array<{
        file_id: number;
        hash: string;
        size: number;
        mime: string;
        ext: string;
        width: number;
        height: number;
        duration: null | number;
        has_audio: boolean;
        num_frames: null | number;
        num_words: null | number;
        is_inbox: boolean;
        is_local: boolean;
        is_trashed: boolean;
        known_urls: Array<string>;
        service_names_to_statuses_to_tags: Array<get_metadata_types>;
        service_names_to_statuses_to_display_tags: Array<get_metadata_types>;
        detailed_known_urls?: Array<get_add_urls_get_url_info_recieve>;
    }>;
};
export declare type get_get_files_file_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_search_for_files: true;
}>;
export declare type get_get_files_file_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_get_files_file_arguments = {
    file_id: number;
    hash: never;
} | {
    hash: string;
    file_id: never;
};
export declare type get_get_files_file_body = undefined;
export declare type get_get_files_file_send = {
    headers: get_get_files_file_headers;
    arguments: get_get_files_file_arguments;
    body: get_get_files_file_body;
};
export declare type get_get_files_thumbnail_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_search_for_files: true;
}>;
export declare type get_get_files_thumbnail_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type get_get_files_thumbnail_arguments = {
    file_id: number;
    hash: never;
} | {
    hash: string;
    file_id: never;
};
export declare type get_get_files_thumbnail_body = undefined;
export declare type get_get_files_thumbnail_send = {
    headers: get_get_files_thumbnail_headers;
    arguments: get_get_files_thumbnail_arguments;
    body: get_get_files_thumbnail_body;
};
export declare type post_manage_database_lock_on_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_database: true;
}>;
export declare type post_manage_database_lock_on_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type post_manage_database_lock_on_arguments = undefined;
export declare type post_manage_database_lock_on_body = undefined;
export declare type post_manage_database_lock_on_send = {
    headers: post_manage_database_lock_on_headers;
    arguments: post_manage_database_lock_on_arguments;
    body: post_manage_database_lock_on_body;
};
export declare type post_manage_database_lock_on_recieve = undefined;
export declare type post_manage_database_lock_off_prereqs = Merge<each_possbile_hydrus_permissions_as_either, {
    hydrus_permission_manage_database: true;
}>;
export declare type post_manage_database_lock_off_headers = {
    "Hydrus-Client-API-Access-Key": string;
};
export declare type post_manage_database_lock_off_arguments = undefined;
export declare type post_manage_database_lock_off_body = undefined;
export declare type post_manage_database_lock_off_send = {
    headers: post_manage_database_lock_off_headers;
    arguments: post_manage_database_lock_off_arguments;
    body: post_manage_database_lock_off_body;
};
export declare type post_manage_database_lock_off_recieve = undefined;
//# sourceMappingURL=index.d.ts.map