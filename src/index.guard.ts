/*
 * Generated type guards for "index.ts".
 * WARNING: Do not manually change this file.
 */
import { each_possbile_hydrus_permissions_as_either, hydrus_gallery_downloader_page, hydrus_simple_downloader_page, hydrus_hard_drive_import_page, hydrus_petitions_page, hydrus_file_search_page, hydrus_URL_downloader_page, hydrus_duplicates_page, hydrus_thread_watcher_page, hydrus_page_of_pages_page, get_metadata_types, get_api_version_prereqs, get_api_version_headers, get_api_version_arguments, get_api_version_body, get_api_version_send, get_api_version_recieve, get_request_new_permissions_prereqs, get_request_new_permissions_headers, get_request_new_permissions_arguments, get_request_new_permissions_body, get_request_new_permissions_send, get_request_new_permissions_recieve, get_session_key_prereqs, get_session_key_headers, get_session_key_arguments, get_session_key_body, get_session_key_send, get_session_key_recieve, get_verify_access_key_prereqs, get_verify_access_key_headers, get_verify_access_key_arguments, get_verify_access_key_body, get_verify_access_key_send, get_verify_access_key_recieve, get_services_prereqs, get_services_headers, get_services_arguments, get_services_body, get_services_send, get_services_recieve, post_add_files_add_file_prereqs, post_add_files_add_file_headers, post_add_files_add_file_headers_json, post_add_files_add_file_headers_stream, post_add_files_add_file_arguments, post_add_files_add_file_body, post_add_files_add_file_send, post_add_files_add_file_recieve, post_add_files_delete_files_prereqs, post_add_files_delete_files_headers, post_add_files_delete_files_arguments, post_add_files_delete_files_body, post_add_files_delete_files_send, post_add_files_delete_files_recieve, post_add_files_undelete_files_prereqs, post_add_files_undelete_files_headers, post_add_files_undelete_files_arguments, post_add_files_undelete_files_body, post_add_files_undelete_files_send, post_add_files_undelete_files_recieve, post_add_files_archive_files_prereqs, post_add_files_archive_files_headers, post_add_files_archive_files_arguments, post_add_files_archive_files_body, post_add_files_archive_files_send, post_add_files_archive_files_recieve, post_add_files_unarchive_files_prereqs, post_add_files_unarchive_files_headers, post_add_files_unarchive_files_arguments, post_add_files_unarchive_files_body, post_add_files_unarchive_files_send, post_add_files_unarchive_files_recieve, get_add_tags_clean_tags_prereqs, get_add_tags_clean_tags_headers, get_add_tags_clean_tags_arguments, get_add_tags_clean_tags_body, get_add_tags_clean_tags_send, get_add_tags_clean_tags_recieve, get_add_tags_get_tag_services_prereqs, get_add_tags_get_tag_services_headers, get_add_tags_get_tag_services_arguments, get_add_tags_get_tag_services_body, get_add_tags_get_tag_services_send, get_add_tags_get_tag_services_recieve, post_add_tags_add_tags_prereqs, post_add_tags_add_tags_headers, post_add_tags_add_tags_arguments, post_add_tags_add_tags_body, post_add_tags_add_tags_send, post_add_tags_add_tags_recieve, get_add_urls_get_url_files_prereqs, get_add_urls_get_url_files_headers, get_add_urls_get_url_files_arguments, get_add_urls_get_url_files_body, get_add_urls_get_url_files_send, get_add_urls_get_url_files_recieve, get_add_urls_get_url_info_prereqs, get_add_urls_get_url_info_headers, get_add_urls_get_url_info_arguments, get_add_urls_get_url_info_body, get_add_urls_get_url_info_send, get_add_urls_get_url_info_recieve, get_add_urls_add_url_prereqs, get_add_urls_add_url_headers, get_add_urls_add_url_arguments, get_add_urls_add_url_body, get_add_urls_add_url_send, get_add_urls_add_url_recieve, post_add_urls_associate_url_prereqs, post_add_urls_associate_url_headers, post_add_urls_associate_url_arguments, post_add_urls_associate_url_body, post_add_urls_associate_url_send, post_add_urls_associate_url_recieve, get_manage_cookies_get_cookies_prereqs, get_manage_cookies_get_cookies_headers, get_manage_cookies_get_cookies_arguments, get_manage_cookies_get_cookies_body, get_manage_cookies_get_cookies_send, post_manage_cookies_set_cookies_prereqs, post_manage_cookies_set_cookies_headers, post_manage_cookies_set_cookies_arguments, post_manage_cookies_set_cookies_recieve, post_manage_headers_set_user_agent_prereqs, post_manage_headers_set_user_agent_headers, post_manage_headers_set_user_agent_arguments, post_manage_headers_set_user_agent_body, post_manage_headers_set_user_agent_send, post_manage_headers_set_user_agent_recieve, get_manage_pages_get_pages_prereqs, get_manage_pages_get_pages_headers, get_manage_pages_get_pages_arguments, get_manage_pages_get_pages_body, get_manage_pages_get_pages_send, get_manage_pages_get_pages_recieve, get_manage_pages_get_page_info_prereqs, get_manage_pages_get_page_info_headers, get_manage_pages_get_page_info_arguments, get_manage_pages_get_page_info_body, get_manage_pages_get_page_info_send, get_manage_pages_get_page_info_recieve, post_manage_pages_add_files_prereqs, post_manage_pages_add_files_headers, post_manage_pages_add_files_arguments, post_manage_pages_add_files_body, post_manage_pages_add_files_send, post_manage_pages_add_files_recieve, get_get_files_search_files_prereqs, get_get_files_search_files_headers, get_get_files_search_files_arguments, get_get_files_search_files_body, get_get_files_search_files_send, get_get_files_search_files_recieve, get_get_files_file_metadata_prereqs, get_get_files_file_metadata_headers, get_get_files_file_metadata_arguments, get_get_files_file_metadata_body, get_get_files_file_metadata_send, get_get_files_file_metadata_recieve, get_get_files_file_prereqs, get_get_files_file_headers, get_get_files_file_arguments, get_get_files_file_body, get_get_files_file_send, get_get_files_thumbnail_prereqs, get_get_files_thumbnail_headers, get_get_files_thumbnail_arguments, get_get_files_thumbnail_body, get_get_files_thumbnail_send, post_manage_database_lock_on_prereqs, post_manage_database_lock_on_headers, post_manage_database_lock_on_arguments, post_manage_database_lock_on_body, post_manage_database_lock_on_send, post_manage_database_lock_on_recieve, post_manage_database_lock_off_prereqs, post_manage_database_lock_off_headers, post_manage_database_lock_off_arguments, post_manage_database_lock_off_body, post_manage_database_lock_off_send, post_manage_database_lock_off_recieve } from "./index";

export function iseach_possbile_hydrus_permissions_as_either(obj: any, _argumentName?: string): obj is each_possbile_hydrus_permissions_as_either {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean"
    )
}

export function ishydrus_gallery_downloader_page(obj: any, _argumentName?: string): obj is hydrus_gallery_downloader_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 1 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_simple_downloader_page(obj: any, _argumentName?: string): obj is hydrus_simple_downloader_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 2 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_hard_drive_import_page(obj: any, _argumentName?: string): obj is hydrus_hard_drive_import_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 3 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_petitions_page(obj: any, _argumentName?: string): obj is hydrus_petitions_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 5 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_file_search_page(obj: any, _argumentName?: string): obj is hydrus_file_search_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 6 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_URL_downloader_page(obj: any, _argumentName?: string): obj is hydrus_URL_downloader_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 7 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_duplicates_page(obj: any, _argumentName?: string): obj is hydrus_duplicates_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 8 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_thread_watcher_page(obj: any, _argumentName?: string): obj is hydrus_thread_watcher_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 9 &&
        typeof obj["selected"] === "boolean"
    )
}

export function ishydrus_page_of_pages_page(obj: any, _argumentName?: string): obj is hydrus_page_of_pages_page {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 10 &&
        typeof obj["selected"] === "boolean" &&
        Array.isArray(obj["pages"]) &&
        obj["pages"].every((e: any) =>
        (ishydrus_gallery_downloader_page(e) as boolean ||
            ishydrus_simple_downloader_page(e) as boolean ||
            ishydrus_hard_drive_import_page(e) as boolean ||
            ishydrus_petitions_page(e) as boolean ||
            ishydrus_file_search_page(e) as boolean ||
            ishydrus_URL_downloader_page(e) as boolean ||
            ishydrus_duplicates_page(e) as boolean ||
            ishydrus_thread_watcher_page(e) as boolean ||
            ishydrus_page_of_pages_page(e) as boolean)
        )
    )
}

export function isget_metadata_types(obj: any, _argumentName?: string): obj is get_metadata_types {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["0"]) &&
            obj["0"].every((e: any) =>
                typeof e === "string"
            ) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["1"]) &&
            obj["1"].every((e: any) =>
                typeof e === "string"
            ) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["2"]) &&
            obj["2"].every((e: any) =>
                typeof e === "string"
            ) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["3"]) &&
            obj["3"].every((e: any) =>
                typeof e === "string"
            ))
    )
}

export function isget_api_version_prereqs(obj: any, _argumentName?: string): obj is get_api_version_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean"
    )
}

export function isget_api_version_headers(obj: any, _argumentName?: string): obj is get_api_version_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (isget_api_version_arguments(obj["Hydrus-Client-API-Access-Key"]) as boolean ||
            typeof obj["Hydrus-Client-API-Access-Key"] === "string")
    )
}

export function isget_api_version_arguments(obj: any, _argumentName?: string): obj is get_api_version_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_api_version_body(obj: any, _argumentName?: string): obj is get_api_version_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_api_version_send(obj: any, _argumentName?: string): obj is get_api_version_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_api_version_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_api_version_recieve(obj: any, _argumentName?: string): obj is get_api_version_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["version"] === "number" &&
        typeof obj["hydrus_version"] === "number"
    )
}

export function isget_request_new_permissions_prereqs(obj: any, _argumentName?: string): obj is get_request_new_permissions_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean"
    )
}

export function isget_request_new_permissions_headers(obj: any, _argumentName?: string): obj is get_request_new_permissions_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        Array.isArray(obj["basic_permissions"]) &&
        obj["basic_permissions"].every((e: any) =>
        (e === 0 ||
            e === 1 ||
            e === 2 ||
            e === 3 ||
            e === 5 ||
            e === 6 ||
            e === 4)
        )
    )
}

export function isget_request_new_permissions_arguments(obj: any, _argumentName?: string): obj is get_request_new_permissions_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_request_new_permissions_body(obj: any, _argumentName?: string): obj is get_request_new_permissions_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_request_new_permissions_send(obj: any, _argumentName?: string): obj is get_request_new_permissions_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_request_new_permissions_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_request_new_permissions_recieve(obj: any, _argumentName?: string): obj is get_request_new_permissions_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["access_key"] === "string"
    )
}

export function isget_session_key_prereqs(obj: any, _argumentName?: string): obj is get_session_key_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean"
    )
}

export function isget_session_key_headers(obj: any, _argumentName?: string): obj is get_session_key_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (isget_api_version_arguments(obj["Hydrus-Client-API-Access-Key"]) as boolean ||
            typeof obj["Hydrus-Client-API-Access-Key"] === "string")
    )
}

export function isget_session_key_arguments(obj: any, _argumentName?: string): obj is get_session_key_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_session_key_body(obj: any, _argumentName?: string): obj is get_session_key_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_session_key_send(obj: any, _argumentName?: string): obj is get_session_key_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_session_key_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_session_key_recieve(obj: any, _argumentName?: string): obj is get_session_key_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["session_key"] === "string"
    )
}

export function isget_verify_access_key_prereqs(obj: any, _argumentName?: string): obj is get_verify_access_key_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean"
    )
}

export function isget_verify_access_key_headers(obj: any, _argumentName?: string): obj is get_verify_access_key_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_verify_access_key_arguments(obj: any, _argumentName?: string): obj is get_verify_access_key_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_verify_access_key_body(obj: any, _argumentName?: string): obj is get_verify_access_key_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_verify_access_key_send(obj: any, _argumentName?: string): obj is get_verify_access_key_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_verify_access_key_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_verify_access_key_recieve(obj: any, _argumentName?: string): obj is get_verify_access_key_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj["basic_permissions"]) &&
        obj["basic_permissions"].every((e: any) =>
        (e === 0 ||
            e === 1 ||
            e === 2 ||
            e === 3 ||
            e === 5 ||
            e === 6 ||
            e === 4)
        ) &&
        typeof obj["human_description"] === "string"
    )
}

export function isget_services_prereqs(obj: any, _argumentName?: string): obj is get_services_prereqs {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hydrus_permission_import_urls"] === "boolean" &&
            obj["hydrus_permission_import_files"] === true &&
            typeof obj["hydrus_permission_add_tags"] === "boolean" &&
            typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
            typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
            typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
            typeof obj["hydrus_permission_manage_database"] === "boolean" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["hydrus_permission_import_urls"] === "boolean" &&
            typeof obj["hydrus_permission_import_files"] === "boolean" &&
            obj["hydrus_permission_add_tags"] === true &&
            typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
            typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
            typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
            typeof obj["hydrus_permission_manage_database"] === "boolean" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["hydrus_permission_import_urls"] === "boolean" &&
            typeof obj["hydrus_permission_import_files"] === "boolean" &&
            typeof obj["hydrus_permission_add_tags"] === "boolean" &&
            typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
            obj["hydrus_permission_manage_pages"] === true &&
            typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
            typeof obj["hydrus_permission_manage_database"] === "boolean" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["hydrus_permission_import_urls"] === "boolean" &&
            typeof obj["hydrus_permission_import_files"] === "boolean" &&
            typeof obj["hydrus_permission_add_tags"] === "boolean" &&
            obj["hydrus_permission_search_for_files"] === true &&
            typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
            typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
            typeof obj["hydrus_permission_manage_database"] === "boolean")
    )
}

export function isget_services_headers(obj: any, _argumentName?: string): obj is get_services_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_services_arguments(obj: any, _argumentName?: string): obj is get_services_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_services_body(obj: any, _argumentName?: string): obj is get_services_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_services_send(obj: any, _argumentName?: string): obj is get_services_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_services_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_services_recieve(obj: any, _argumentName?: string): obj is get_services_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function")
    )
}

export function ispost_add_files_add_file_prereqs(obj: any, _argumentName?: string): obj is post_add_files_add_file_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true
    )
}

export function ispost_add_files_add_file_headers(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        (obj["Content-Type"] === "application/json" ||
            obj["Content-Type"] === "application/octet-stream")
    )
}

export function ispost_add_files_add_file_headers_json(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers_json {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_add_files_add_file_headers_stream(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers_stream {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/octet-stream"
    )
}

export function ispost_add_files_add_file_arguments(obj: any, _argumentName?: string): obj is post_add_files_add_file_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_add_file_body(obj: any, _argumentName?: string): obj is post_add_files_add_file_body {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["path"] === "string" ||
            obj instanceof Buffer)
    )
}

export function ispost_add_files_add_file_send(obj: any, _argumentName?: string): obj is post_add_files_add_file_send {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            isget_api_version_arguments(obj["arguments"]) as boolean &&
            ispost_add_files_add_file_headers_stream(obj["headers"]) as boolean &&
            obj["body"] instanceof Buffer ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            isget_api_version_arguments(obj["arguments"]) as boolean &&
            ispost_add_files_add_file_headers_json(obj["headers"]) as boolean &&
            (obj["body"] !== null &&
                typeof obj["body"] === "object" ||
                typeof obj["body"] === "function") &&
            typeof obj["body"]["path"] === "string")
    )
}

export function ispost_add_files_add_file_recieve(obj: any, _argumentName?: string): obj is post_add_files_add_file_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (obj["status"] === 1 ||
            obj["status"] === 2 ||
            obj["status"] === 3 ||
            obj["status"] === 5 ||
            obj["status"] === 4) &&
        typeof obj["hash"] === "string" &&
        typeof obj["note"] === "string"
    )
}

export function ispost_add_files_delete_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_delete_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true
    )
}

export function ispost_add_files_delete_files_headers(obj: any, _argumentName?: string): obj is post_add_files_delete_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_add_files_delete_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_delete_files_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_delete_files_body(obj: any, _argumentName?: string): obj is post_add_files_delete_files_body {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e: any) =>
                typeof e === "string"
            ) &&
            typeof obj["hash"] === "undefined")
    )
}

export function ispost_add_files_delete_files_send(obj: any, _argumentName?: string): obj is post_add_files_delete_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_files_delete_files_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_files_delete_files_body(obj["body"]) as boolean
    )
}

export function ispost_add_files_delete_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_delete_files_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_undelete_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true
    )
}

export function ispost_add_files_undelete_files_headers(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_add_files_undelete_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_undelete_files_body(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_body {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e: any) =>
                typeof e === "string"
            ) &&
            typeof obj["hash"] === "undefined")
    )
}

export function ispost_add_files_undelete_files_send(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_files_undelete_files_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_files_undelete_files_body(obj["body"]) as boolean
    )
}

export function ispost_add_files_undelete_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_archive_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_archive_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true
    )
}

export function ispost_add_files_archive_files_headers(obj: any, _argumentName?: string): obj is post_add_files_archive_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_add_files_archive_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_archive_files_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_archive_files_body(obj: any, _argumentName?: string): obj is post_add_files_archive_files_body {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e: any) =>
                typeof e === "string"
            ) &&
            typeof obj["hash"] === "undefined")
    )
}

export function ispost_add_files_archive_files_send(obj: any, _argumentName?: string): obj is post_add_files_archive_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_files_archive_files_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_files_archive_files_body(obj["body"]) as boolean
    )
}

export function ispost_add_files_archive_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_archive_files_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_unarchive_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true
    )
}

export function ispost_add_files_unarchive_files_headers(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_add_files_unarchive_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_files_unarchive_files_body(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_body {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e: any) =>
                typeof e === "string"
            ) &&
            typeof obj["hash"] === "undefined")
    )
}

export function ispost_add_files_unarchive_files_send(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_files_unarchive_files_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_files_unarchive_files_body(obj["body"]) as boolean
    )
}

export function ispost_add_files_unarchive_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_tags_clean_tags_prereqs(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true
    )
}

export function isget_add_tags_clean_tags_headers(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_add_tags_clean_tags_arguments(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_arguments {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj["tags"]) &&
        obj["tags"].every((e: any) =>
            typeof e === "string"
        )
    )
}

export function isget_add_tags_clean_tags_body(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_tags_clean_tags_send(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_add_tags_clean_tags_headers(obj["headers"]) as boolean &&
        isget_add_tags_clean_tags_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_add_tags_clean_tags_recieve(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj["tags"]) &&
        obj["tags"].every((e: any) =>
            typeof e === "string"
        )
    )
}

export function isget_add_tags_get_tag_services_prereqs(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true
    )
}

export function isget_add_tags_get_tag_services_headers(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_add_tags_get_tag_services_arguments(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_tags_get_tag_services_body(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_tags_get_tag_services_send(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_add_tags_get_tag_services_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_add_tags_get_tag_services_recieve(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (isget_api_version_arguments(obj["local_tags"]) as boolean ||
            Array.isArray(obj["local_tags"]) &&
            obj["local_tags"].every((e: any) =>
                typeof e === "string"
            )) &&
        (isget_api_version_arguments(obj["tag_repositories"]) as boolean ||
            Array.isArray(obj["tag_repositories"]) &&
            obj["tag_repositories"].every((e: any) =>
                typeof e === "string"
            ))
    )
}

export function ispost_add_tags_add_tags_prereqs(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true
    )
}

export function ispost_add_tags_add_tags_headers(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function ispost_add_tags_add_tags_arguments(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_tags_add_tags_body(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_body {
    return (
        (((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (obj["service_names_to_tags"] !== null &&
                typeof obj["service_names_to_tags"] === "object" ||
                typeof obj["service_names_to_tags"] === "function") &&
            typeof obj["service_names_to_actions_to_tags"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["hash"] === "string" &&
                typeof obj["hashes"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                typeof obj["service_names_to_tags"] === "undefined" &&
                (((obj["service_names_to_actions_to_tags"] !== null &&
                    typeof obj["service_names_to_actions_to_tags"] === "object" ||
                    typeof obj["service_names_to_actions_to_tags"] === "function") ||
                    (obj["service_names_to_actions_to_tags"] !== null &&
                        typeof obj["service_names_to_actions_to_tags"] === "object" ||
                        typeof obj["service_names_to_actions_to_tags"] === "function")) ||
                    ((obj["service_names_to_actions_to_tags"] !== null &&
                        typeof obj["service_names_to_actions_to_tags"] === "object" ||
                        typeof obj["service_names_to_actions_to_tags"] === "function") ||
                        (obj["service_names_to_actions_to_tags"] !== null &&
                            typeof obj["service_names_to_actions_to_tags"] === "object" ||
                            typeof obj["service_names_to_actions_to_tags"] === "function")))) ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                (obj["service_names_to_tags"] !== null &&
                    typeof obj["service_names_to_tags"] === "object" ||
                    typeof obj["service_names_to_tags"] === "function") &&
                typeof obj["service_names_to_actions_to_tags"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                typeof obj["service_names_to_tags"] === "undefined" &&
                (((obj["service_names_to_actions_to_tags"] !== null &&
                    typeof obj["service_names_to_actions_to_tags"] === "object" ||
                    typeof obj["service_names_to_actions_to_tags"] === "function") ||
                    (obj["service_names_to_actions_to_tags"] !== null &&
                        typeof obj["service_names_to_actions_to_tags"] === "object" ||
                        typeof obj["service_names_to_actions_to_tags"] === "function")) ||
                    ((obj["service_names_to_actions_to_tags"] !== null &&
                        typeof obj["service_names_to_actions_to_tags"] === "object" ||
                        typeof obj["service_names_to_actions_to_tags"] === "function") ||
                        (obj["service_names_to_actions_to_tags"] !== null &&
                            typeof obj["service_names_to_actions_to_tags"] === "object" ||
                            typeof obj["service_names_to_actions_to_tags"] === "function")))))
    )
}

export function ispost_add_tags_add_tags_send(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_tags_add_tags_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_tags_add_tags_body(obj["body"]) as boolean
    )
}

export function ispost_add_tags_add_tags_recieve(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_urls_get_url_files_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true
    )
}

export function isget_add_urls_get_url_files_headers(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_add_urls_get_url_files_arguments(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_arguments {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["url"] === "string"
    )
}

export function isget_add_urls_get_url_files_body(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_urls_get_url_files_send(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_add_urls_get_url_files_headers(obj["headers"]) as boolean &&
        isget_add_urls_get_url_files_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_add_urls_get_url_files_recieve(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["normalised_url"] === "string" &&
        Array.isArray(obj["url_file_statuses"]) &&
        obj["url_file_statuses"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["hash"] === "string" &&
            typeof e["note"] === "string" &&
            (e["status"] === 0 ||
                e["status"] === 1 ||
                e["status"] === 2)
        )
    )
}

export function isget_add_urls_get_url_info_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true
    )
}

export function isget_add_urls_get_url_info_headers(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_add_urls_get_url_info_arguments(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_arguments {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["url"] === "string"
    )
}

export function isget_add_urls_get_url_info_body(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_urls_get_url_info_send(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_add_urls_get_url_info_headers(obj["headers"]) as boolean &&
        isget_add_urls_get_url_info_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_add_urls_get_url_info_recieve(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["normalised_url"] === "string" &&
        (obj["url_type"] === 0 ||
            obj["url_type"] === 2 ||
            obj["url_type"] === 3 ||
            obj["url_type"] === 5 ||
            obj["url_type"] === 4) &&
        typeof obj["url_type_string"] === "string" &&
        typeof obj["match_name"] === "string" &&
        typeof obj["can_parse"] === "boolean"
    )
}

export function isget_add_urls_add_url_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_add_url_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true
    )
}

export function isget_add_urls_add_url_headers(obj: any, _argumentName?: string): obj is get_add_urls_add_url_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_add_urls_add_url_arguments(obj: any, _argumentName?: string): obj is get_add_urls_add_url_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_add_urls_add_url_body(obj: any, _argumentName?: string): obj is get_add_urls_add_url_body {
    return (
        (((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["url"] === "string" &&
            (isget_api_version_arguments(obj["show_destination_page"]) as boolean ||
                obj["show_destination_page"] === false ||
                obj["show_destination_page"] === true) &&
            (isget_api_version_arguments(obj["service_names_to_additional_tags"]) as boolean ||
                (obj["service_names_to_additional_tags"] !== null &&
                    typeof obj["service_names_to_additional_tags"] === "object" ||
                    typeof obj["service_names_to_additional_tags"] === "function")) &&
            (isget_api_version_arguments(obj["filterable_tags"]) as boolean ||
                Array.isArray(obj["filterable_tags"]) &&
                obj["filterable_tags"].every((e: any) =>
                    typeof e === "string"
                )) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (isget_api_version_arguments(obj["destination_page_name"]) as boolean ||
                typeof obj["destination_page_name"] === "string") &&
            isget_api_version_arguments(obj["destination_page_key"]) as boolean) ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["url"] === "string" &&
                (isget_api_version_arguments(obj["show_destination_page"]) as boolean ||
                    obj["show_destination_page"] === false ||
                    obj["show_destination_page"] === true) &&
                (isget_api_version_arguments(obj["service_names_to_additional_tags"]) as boolean ||
                    (obj["service_names_to_additional_tags"] !== null &&
                        typeof obj["service_names_to_additional_tags"] === "object" ||
                        typeof obj["service_names_to_additional_tags"] === "function")) &&
                (isget_api_version_arguments(obj["filterable_tags"]) as boolean ||
                    Array.isArray(obj["filterable_tags"]) &&
                    obj["filterable_tags"].every((e: any) =>
                        typeof e === "string"
                    )) ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                (isget_api_version_arguments(obj["destination_page_key"]) as boolean ||
                    typeof obj["destination_page_key"] === "string") &&
                isget_api_version_arguments(obj["destination_page_name"]) as boolean))
    )
}

export function isget_add_urls_add_url_send(obj: any, _argumentName?: string): obj is get_add_urls_add_url_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_add_urls_add_url_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_add_urls_add_url_body(obj["body"]) as boolean
    )
}

export function isget_add_urls_add_url_recieve(obj: any, _argumentName?: string): obj is get_add_urls_add_url_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["human_result_text"] === "string" &&
        typeof obj["normalized_url"] === "string"
    )
}

export function ispost_add_urls_associate_url_prereqs(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true
    )
}

export function ispost_add_urls_associate_url_headers(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function ispost_add_urls_associate_url_arguments(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_add_urls_associate_url_body(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_body {
    return (
        (((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["hashes"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["url_to_add"] === "string" &&
            typeof obj["urls_to_add"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["hash"] === "string" &&
                typeof obj["hashes"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["urls_to_add"]) &&
                obj["urls_to_add"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["url_to_add"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["hash"] === "string" &&
                typeof obj["hashes"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                typeof obj["url_to_delete"] === "string" &&
                typeof obj["urls_to_delete"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["hash"] === "string" &&
                typeof obj["hashes"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["urls_to_delete"]) &&
                obj["urls_to_delete"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["url_to_delete"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                typeof obj["url_to_add"] === "string" &&
                typeof obj["urls_to_add"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["urls_to_add"]) &&
                obj["urls_to_add"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["url_to_add"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                typeof obj["url_to_delete"] === "string" &&
                typeof obj["urls_to_delete"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["hash"] === "undefined" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["urls_to_delete"]) &&
                obj["urls_to_delete"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["url_to_delete"] === "undefined"))
    )
}

export function ispost_add_urls_associate_url_send(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_add_urls_associate_url_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_add_urls_associate_url_body(obj["body"]) as boolean
    )
}

export function ispost_add_urls_associate_url_recieve(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_cookies_get_cookies_prereqs(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true
    )
}

export function isget_manage_cookies_get_cookies_headers(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_manage_cookies_get_cookies_arguments(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_arguments {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["domain"] === "string"
    )
}

export function isget_manage_cookies_get_cookies_body(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_cookies_get_cookies_send(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_manage_cookies_get_cookies_headers(obj["headers"]) as boolean &&
        isget_manage_cookies_get_cookies_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function ispost_manage_cookies_set_cookies_prereqs(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true
    )
}

export function ispost_manage_cookies_set_cookies_headers(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_manage_cookies_set_cookies_arguments(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_cookies_set_cookies_recieve(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_headers_set_user_agent_prereqs(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true
    )
}

export function ispost_manage_headers_set_user_agent_headers(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_manage_headers_set_user_agent_arguments(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_headers_set_user_agent_body(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_body {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["user-agent"] === "string"
    )
}

export function ispost_manage_headers_set_user_agent_send(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_manage_headers_set_user_agent_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_manage_headers_set_user_agent_body(obj["body"]) as boolean
    )
}

export function ispost_manage_headers_set_user_agent_recieve(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_pages_get_pages_prereqs(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true
    )
}

export function isget_manage_pages_get_pages_headers(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_manage_pages_get_pages_arguments(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_pages_get_pages_body(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_pages_get_pages_send(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_manage_pages_get_pages_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_manage_pages_get_pages_recieve(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (ishydrus_gallery_downloader_page(obj["pages"]) as boolean ||
            ishydrus_simple_downloader_page(obj["pages"]) as boolean ||
            ishydrus_hard_drive_import_page(obj["pages"]) as boolean ||
            ishydrus_petitions_page(obj["pages"]) as boolean ||
            ishydrus_file_search_page(obj["pages"]) as boolean ||
            ishydrus_URL_downloader_page(obj["pages"]) as boolean ||
            ishydrus_duplicates_page(obj["pages"]) as boolean ||
            ishydrus_thread_watcher_page(obj["pages"]) as boolean ||
            ishydrus_page_of_pages_page(obj["pages"]) as boolean)
    )
}

export function isget_manage_pages_get_page_info_prereqs(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true
    )
}

export function isget_manage_pages_get_page_info_headers(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_manage_pages_get_page_info_arguments(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_pages_get_page_info_body(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_manage_pages_get_page_info_send(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_manage_pages_get_page_info_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_manage_pages_get_page_info_recieve(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function")
    )
}

export function ispost_manage_pages_add_files_prereqs(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true
    )
}

export function ispost_manage_pages_add_files_headers(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json"
    )
}

export function ispost_manage_pages_add_files_arguments(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_pages_add_files_body(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_body {
    return (
        (((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["page_key"] === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["file_ids"]) &&
            obj["file_ids"].every((e: any) =>
                typeof e === "number"
            ) &&
            typeof obj["hashes"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                typeof obj["page_key"] === "string" ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["file_ids"] === "undefined"))
    )
}

export function ispost_manage_pages_add_files_send(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_manage_pages_add_files_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        ispost_manage_pages_add_files_body(obj["body"]) as boolean
    )
}

export function ispost_manage_pages_add_files_recieve(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function isget_get_files_search_files_prereqs(obj: any, _argumentName?: string): obj is get_get_files_search_files_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true
    )
}

export function isget_get_files_search_files_headers(obj: any, _argumentName?: string): obj is get_get_files_search_files_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_get_files_search_files_arguments(obj: any, _argumentName?: string): obj is get_get_files_search_files_arguments {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["tags"] === "string" &&
        typeof obj["system_inbox"] === "undefined" &&
        typeof obj["system_archive"] === "undefined"
    )
}

export function isget_get_files_search_files_body(obj: any, _argumentName?: string): obj is get_get_files_search_files_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_get_files_search_files_send(obj: any, _argumentName?: string): obj is get_get_files_search_files_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_get_files_search_files_headers(obj["headers"]) as boolean &&
        isget_get_files_search_files_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_get_files_search_files_recieve(obj: any, _argumentName?: string): obj is get_get_files_search_files_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj["file_ids"]) &&
        obj["file_ids"].every((e: any) =>
            typeof e === "number"
        )
    )
}

export function isget_get_files_file_metadata_prereqs(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true
    )
}

export function isget_get_files_file_metadata_headers(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_get_files_file_metadata_arguments(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_arguments {
    return (
        (((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (isget_api_version_arguments(obj["only_return_identifiers"]) as boolean ||
                obj["only_return_identifiers"] === false ||
                obj["only_return_identifiers"] === true) &&
            (isget_api_version_arguments(obj["detailed_url_information"]) as boolean ||
                obj["detailed_url_information"] === false ||
                obj["detailed_url_information"] === true) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj["file_ids"]) &&
            obj["file_ids"].every((e: any) =>
                typeof e === "number"
            ) &&
            typeof obj["hashes"] === "undefined") ||
            ((obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                (isget_api_version_arguments(obj["only_return_identifiers"]) as boolean ||
                    obj["only_return_identifiers"] === false ||
                    obj["only_return_identifiers"] === true) &&
                (isget_api_version_arguments(obj["detailed_url_information"]) as boolean ||
                    obj["detailed_url_information"] === false ||
                    obj["detailed_url_information"] === true) ||
                (obj !== null &&
                    typeof obj === "object" ||
                    typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e: any) =>
                    typeof e === "string"
                ) &&
                typeof obj["file_ids"] === "undefined"))
    )
}

export function isget_get_files_file_metadata_body(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_get_files_file_metadata_send(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_get_files_file_metadata_headers(obj["headers"]) as boolean &&
        isget_get_files_file_metadata_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_get_files_file_metadata_recieve(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_recieve {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj["metadata"]) &&
        obj["metadata"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["file_id"] === "number" &&
            typeof e["hash"] === "string" &&
            typeof e["size"] === "number" &&
            typeof e["mime"] === "string" &&
            typeof e["ext"] === "string" &&
            typeof e["width"] === "number" &&
            typeof e["height"] === "number" &&
            (e["duration"] === null ||
                typeof e["duration"] === "number") &&
            typeof e["has_audio"] === "boolean" &&
            (e["num_frames"] === null ||
                typeof e["num_frames"] === "number") &&
            (e["num_words"] === null ||
                typeof e["num_words"] === "number") &&
            typeof e["is_inbox"] === "boolean" &&
            typeof e["is_local"] === "boolean" &&
            typeof e["is_trashed"] === "boolean" &&
            Array.isArray(e["known_urls"]) &&
            e["known_urls"].every((e: any) =>
                typeof e === "string"
            ) &&
            (e["service_names_to_statuses_to_tags"] !== null &&
                typeof e["service_names_to_statuses_to_tags"] === "object" ||
                typeof e["service_names_to_statuses_to_tags"] === "function") &&
            (e["service_names_to_statuses_to_display_tags"] !== null &&
                typeof e["service_names_to_statuses_to_display_tags"] === "object" ||
                typeof e["service_names_to_statuses_to_display_tags"] === "function") &&
            (isget_api_version_arguments(e["detailed_known_urls"]) as boolean ||
                Array.isArray(e["detailed_known_urls"]) &&
                e["detailed_known_urls"].every((e: any) =>
                    isget_add_urls_get_url_info_recieve(e) as boolean
                ))
        )
    )
}

export function isget_get_files_file_prereqs(obj: any, _argumentName?: string): obj is get_get_files_file_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true
    )
}

export function isget_get_files_file_headers(obj: any, _argumentName?: string): obj is get_get_files_file_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_get_files_file_arguments(obj: any, _argumentName?: string): obj is get_get_files_file_arguments {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["file_id"] === "number" &&
            typeof obj["hash"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["file_id"] === "undefined")
    )
}

export function isget_get_files_file_body(obj: any, _argumentName?: string): obj is get_get_files_file_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_get_files_file_send(obj: any, _argumentName?: string): obj is get_get_files_file_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_get_files_file_headers(obj["headers"]) as boolean &&
        isget_get_files_file_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function isget_get_files_thumbnail_prereqs(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true
    )
}

export function isget_get_files_thumbnail_headers(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function isget_get_files_thumbnail_arguments(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_arguments {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["file_id"] === "number" &&
            typeof obj["hash"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["file_id"] === "undefined")
    )
}

export function isget_get_files_thumbnail_body(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_body {
    return (
        typeof obj === "undefined"
    )
}

export function isget_get_files_thumbnail_send(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        isget_get_files_thumbnail_headers(obj["headers"]) as boolean &&
        isget_get_files_thumbnail_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function ispost_manage_database_lock_on_prereqs(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        obj["hydrus_permission_manage_database"] === true
    )
}

export function ispost_manage_database_lock_on_headers(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function ispost_manage_database_lock_on_arguments(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_database_lock_on_body(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_body {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_database_lock_on_send(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_manage_database_lock_on_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function ispost_manage_database_lock_on_recieve(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_recieve {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_database_lock_off_prereqs(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_prereqs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        obj["hydrus_permission_manage_database"] === true
    )
}

export function ispost_manage_database_lock_off_headers(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_headers {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string"
    )
}

export function ispost_manage_database_lock_off_arguments(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_arguments {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_database_lock_off_body(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_body {
    return (
        typeof obj === "undefined"
    )
}

export function ispost_manage_database_lock_off_send(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_send {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        ispost_manage_database_lock_off_headers(obj["headers"]) as boolean &&
        isget_api_version_arguments(obj["arguments"]) as boolean &&
        isget_api_version_arguments(obj["body"]) as boolean
    )
}

export function ispost_manage_database_lock_off_recieve(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_recieve {
    return (
        typeof obj === "undefined"
    )
}
