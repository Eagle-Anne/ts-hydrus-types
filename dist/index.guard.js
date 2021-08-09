export function iseach_possbile_hydrus_permissions_as_either(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean");
}
export function ishydrus_gallery_downloader_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 1 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_simple_downloader_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 2 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_hard_drive_import_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 3 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_petitions_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 5 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_file_search_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 6 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_URL_downloader_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 7 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_duplicates_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 8 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_thread_watcher_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 9 &&
        typeof obj["selected"] === "boolean");
}
export function ishydrus_page_of_pages_page(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        typeof obj["page_key"] === "string" &&
        obj["page_type"] === 10 &&
        typeof obj["selected"] === "boolean" &&
        Array.isArray(obj["pages"]) &&
        obj["pages"].every((e) => (ishydrus_gallery_downloader_page(e) ||
            ishydrus_simple_downloader_page(e) ||
            ishydrus_hard_drive_import_page(e) ||
            ishydrus_petitions_page(e) ||
            ishydrus_file_search_page(e) ||
            ishydrus_URL_downloader_page(e) ||
            ishydrus_duplicates_page(e) ||
            ishydrus_thread_watcher_page(e) ||
            ishydrus_page_of_pages_page(e))));
}
export function isget_metadata_types(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["0"]) &&
        obj["0"].every((e) => typeof e === "string") ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["1"]) &&
            obj["1"].every((e) => typeof e === "string") ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["2"]) &&
            obj["2"].every((e) => typeof e === "string") ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["3"]) &&
            obj["3"].every((e) => typeof e === "string")));
}
export function isget_api_version_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean");
}
export function isget_api_version_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (isget_api_version_arguments(obj["Hydrus-Client-API-Access-Key"]) ||
            typeof obj["Hydrus-Client-API-Access-Key"] === "string"));
}
export function isget_api_version_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_api_version_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_api_version_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_api_version_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_api_version_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["version"] === "number" &&
        typeof obj["hydrus_version"] === "number");
}
export function isget_request_new_permissions_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean");
}
export function isget_request_new_permissions_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["name"] === "string" &&
        Array.isArray(obj["basic_permissions"]) &&
        obj["basic_permissions"].every((e) => (e === 0 ||
            e === 1 ||
            e === 2 ||
            e === 3 ||
            e === 5 ||
            e === 6 ||
            e === 4)));
}
export function isget_request_new_permissions_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_request_new_permissions_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_request_new_permissions_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_request_new_permissions_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_request_new_permissions_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["access_key"] === "string");
}
export function isget_session_key_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean");
}
export function isget_session_key_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (isget_api_version_arguments(obj["Hydrus-Client-API-Access-Key"]) ||
            typeof obj["Hydrus-Client-API-Access-Key"] === "string"));
}
export function isget_session_key_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_session_key_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_session_key_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_session_key_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_session_key_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["session_key"] === "string");
}
export function isget_verify_access_key_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean");
}
export function isget_verify_access_key_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_verify_access_key_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_verify_access_key_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_verify_access_key_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_verify_access_key_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_verify_access_key_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["basic_permissions"]) &&
        obj["basic_permissions"].every((e) => (e === 0 ||
            e === 1 ||
            e === 2 ||
            e === 3 ||
            e === 5 ||
            e === 6 ||
            e === 4)) &&
        typeof obj["human_description"] === "string");
}
export function isget_services_prereqs(obj, _argumentName) {
    return (((obj !== null &&
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
            typeof obj["hydrus_permission_manage_database"] === "boolean"));
}
export function isget_services_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_services_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_services_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_services_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_services_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_services_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function"));
}
export function ispost_add_files_add_file_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true);
}
export function ispost_add_files_add_file_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        (obj["Content-Type"] === "application/json" ||
            obj["Content-Type"] === "application/octet-stream"));
}
export function ispost_add_files_add_file_headers_json(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_add_files_add_file_headers_stream(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/octet-stream");
}
export function ispost_add_files_add_file_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_add_file_body(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["path"] === "string" ||
        obj instanceof Buffer));
}
export function ispost_add_files_add_file_send(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_files_add_file_headers_stream(obj["headers"]) &&
        obj["body"] instanceof Buffer ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            isget_api_version_arguments(obj["arguments"]) &&
            ispost_add_files_add_file_headers_json(obj["headers"]) &&
            (obj["body"] !== null &&
                typeof obj["body"] === "object" ||
                typeof obj["body"] === "function") &&
            typeof obj["body"]["path"] === "string"));
}
export function ispost_add_files_add_file_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (obj["status"] === 1 ||
            obj["status"] === 2 ||
            obj["status"] === 3 ||
            obj["status"] === 5 ||
            obj["status"] === 4) &&
        typeof obj["hash"] === "string" &&
        typeof obj["note"] === "string");
}
export function ispost_add_files_delete_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true);
}
export function ispost_add_files_delete_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_add_files_delete_files_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_delete_files_body(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hash"] === "string" &&
        typeof obj["hashes"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined"));
}
export function ispost_add_files_delete_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_files_delete_files_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_files_delete_files_body(obj["body"]));
}
export function ispost_add_files_delete_files_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_undelete_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true);
}
export function ispost_add_files_undelete_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_add_files_undelete_files_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_undelete_files_body(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hash"] === "string" &&
        typeof obj["hashes"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined"));
}
export function ispost_add_files_undelete_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_files_undelete_files_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_files_undelete_files_body(obj["body"]));
}
export function ispost_add_files_undelete_files_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_archive_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true);
}
export function ispost_add_files_archive_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_add_files_archive_files_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_archive_files_body(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hash"] === "string" &&
        typeof obj["hashes"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined"));
}
export function ispost_add_files_archive_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_files_archive_files_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_files_archive_files_body(obj["body"]));
}
export function ispost_add_files_archive_files_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_unarchive_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_files"] === true);
}
export function ispost_add_files_unarchive_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_add_files_unarchive_files_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_files_unarchive_files_body(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hash"] === "string" &&
        typeof obj["hashes"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined"));
}
export function ispost_add_files_unarchive_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_files_unarchive_files_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_files_unarchive_files_body(obj["body"]));
}
export function ispost_add_files_unarchive_files_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_tags_clean_tags_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true);
}
export function isget_add_tags_clean_tags_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_add_tags_clean_tags_arguments(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["tags"]) &&
        obj["tags"].every((e) => typeof e === "string"));
}
export function isget_add_tags_clean_tags_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_tags_clean_tags_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_add_tags_clean_tags_headers(obj["headers"]) &&
        isget_add_tags_clean_tags_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_add_tags_clean_tags_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["tags"]) &&
        obj["tags"].every((e) => typeof e === "string"));
}
export function isget_add_tags_get_tag_services_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true);
}
export function isget_add_tags_get_tag_services_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_add_tags_get_tag_services_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_tags_get_tag_services_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_tags_get_tag_services_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_add_tags_get_tag_services_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_add_tags_get_tag_services_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (isget_api_version_arguments(obj["local_tags"]) ||
            Array.isArray(obj["local_tags"]) &&
                obj["local_tags"].every((e) => typeof e === "string")) &&
        (isget_api_version_arguments(obj["tag_repositories"]) ||
            Array.isArray(obj["tag_repositories"]) &&
                obj["tag_repositories"].every((e) => typeof e === "string")));
}
export function ispost_add_tags_add_tags_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_add_tags"] === true);
}
export function ispost_add_tags_add_tags_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function ispost_add_tags_add_tags_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_tags_add_tags_body(obj, _argumentName) {
    return ((((obj !== null &&
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
            obj["hashes"].every((e) => typeof e === "string") &&
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
            obj["hashes"].every((e) => typeof e === "string") &&
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
                            typeof obj["service_names_to_actions_to_tags"] === "function"))))));
}
export function ispost_add_tags_add_tags_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_tags_add_tags_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_tags_add_tags_body(obj["body"]));
}
export function ispost_add_tags_add_tags_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_urls_get_url_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true);
}
export function isget_add_urls_get_url_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_add_urls_get_url_files_arguments(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["url"] === "string");
}
export function isget_add_urls_get_url_files_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_urls_get_url_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_add_urls_get_url_files_headers(obj["headers"]) &&
        isget_add_urls_get_url_files_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_add_urls_get_url_files_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["normalised_url"] === "string" &&
        Array.isArray(obj["url_file_statuses"]) &&
        obj["url_file_statuses"].every((e) => (e !== null &&
            typeof e === "object" ||
            typeof e === "function") &&
            typeof e["hash"] === "string" &&
            typeof e["note"] === "string" &&
            (e["status"] === 0 ||
                e["status"] === 1 ||
                e["status"] === 2)));
}
export function isget_add_urls_get_url_info_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true);
}
export function isget_add_urls_get_url_info_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_add_urls_get_url_info_arguments(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["url"] === "string");
}
export function isget_add_urls_get_url_info_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_urls_get_url_info_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_add_urls_get_url_info_headers(obj["headers"]) &&
        isget_add_urls_get_url_info_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_add_urls_get_url_info_recieve(obj, _argumentName) {
    return ((obj !== null &&
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
        typeof obj["can_parse"] === "boolean");
}
export function isget_add_urls_add_url_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true);
}
export function isget_add_urls_add_url_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_add_urls_add_url_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_add_urls_add_url_body(obj, _argumentName) {
    return ((((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["url"] === "string" &&
        (isget_api_version_arguments(obj["show_destination_page"]) ||
            obj["show_destination_page"] === false ||
            obj["show_destination_page"] === true) &&
        (isget_api_version_arguments(obj["service_names_to_additional_tags"]) ||
            (obj["service_names_to_additional_tags"] !== null &&
                typeof obj["service_names_to_additional_tags"] === "object" ||
                typeof obj["service_names_to_additional_tags"] === "function")) &&
        (isget_api_version_arguments(obj["filterable_tags"]) ||
            Array.isArray(obj["filterable_tags"]) &&
                obj["filterable_tags"].every((e) => typeof e === "string")) ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (isget_api_version_arguments(obj["destination_page_name"]) ||
                typeof obj["destination_page_name"] === "string") &&
            isget_api_version_arguments(obj["destination_page_key"])) ||
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["url"] === "string" &&
            (isget_api_version_arguments(obj["show_destination_page"]) ||
                obj["show_destination_page"] === false ||
                obj["show_destination_page"] === true) &&
            (isget_api_version_arguments(obj["service_names_to_additional_tags"]) ||
                (obj["service_names_to_additional_tags"] !== null &&
                    typeof obj["service_names_to_additional_tags"] === "object" ||
                    typeof obj["service_names_to_additional_tags"] === "function")) &&
            (isget_api_version_arguments(obj["filterable_tags"]) ||
                Array.isArray(obj["filterable_tags"]) &&
                    obj["filterable_tags"].every((e) => typeof e === "string")) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                (isget_api_version_arguments(obj["destination_page_key"]) ||
                    typeof obj["destination_page_key"] === "string") &&
                isget_api_version_arguments(obj["destination_page_name"]))));
}
export function isget_add_urls_add_url_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_add_urls_add_url_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_add_urls_add_url_body(obj["body"]));
}
export function isget_add_urls_add_url_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["human_result_text"] === "string" &&
        typeof obj["normalized_url"] === "string");
}
export function ispost_add_urls_associate_url_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_import_urls"] === true);
}
export function ispost_add_urls_associate_url_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function ispost_add_urls_associate_url_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_add_urls_associate_url_body(obj, _argumentName) {
    return ((((obj !== null &&
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
                obj["urls_to_add"].every((e) => typeof e === "string") &&
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
                obj["urls_to_delete"].every((e) => typeof e === "string") &&
                typeof obj["url_to_delete"] === "undefined") ||
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
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
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["urls_to_add"]) &&
                obj["urls_to_add"].every((e) => typeof e === "string") &&
                typeof obj["url_to_add"] === "undefined") ||
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["hashes"]) &&
            obj["hashes"].every((e) => typeof e === "string") &&
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
            obj["hashes"].every((e) => typeof e === "string") &&
            typeof obj["hash"] === "undefined" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["urls_to_delete"]) &&
                obj["urls_to_delete"].every((e) => typeof e === "string") &&
                typeof obj["url_to_delete"] === "undefined")));
}
export function ispost_add_urls_associate_url_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_add_urls_associate_url_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_add_urls_associate_url_body(obj["body"]));
}
export function ispost_add_urls_associate_url_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_cookies_get_cookies_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true);
}
export function isget_manage_cookies_get_cookies_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_manage_cookies_get_cookies_arguments(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["domain"] === "string");
}
export function isget_manage_cookies_get_cookies_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_cookies_get_cookies_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_manage_cookies_get_cookies_headers(obj["headers"]) &&
        isget_manage_cookies_get_cookies_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function ispost_manage_cookies_set_cookies_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true);
}
export function ispost_manage_cookies_set_cookies_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_manage_cookies_set_cookies_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_cookies_set_cookies_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_headers_set_user_agent_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_cookies"] === true);
}
export function ispost_manage_headers_set_user_agent_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_manage_headers_set_user_agent_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_headers_set_user_agent_body(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["user-agent"] === "string");
}
export function ispost_manage_headers_set_user_agent_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_manage_headers_set_user_agent_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_manage_headers_set_user_agent_body(obj["body"]));
}
export function ispost_manage_headers_set_user_agent_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_pages_get_pages_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true);
}
export function isget_manage_pages_get_pages_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_manage_pages_get_pages_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_pages_get_pages_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_pages_get_pages_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_manage_pages_get_pages_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_manage_pages_get_pages_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (ishydrus_gallery_downloader_page(obj["pages"]) ||
            ishydrus_simple_downloader_page(obj["pages"]) ||
            ishydrus_hard_drive_import_page(obj["pages"]) ||
            ishydrus_petitions_page(obj["pages"]) ||
            ishydrus_file_search_page(obj["pages"]) ||
            ishydrus_URL_downloader_page(obj["pages"]) ||
            ishydrus_duplicates_page(obj["pages"]) ||
            ishydrus_thread_watcher_page(obj["pages"]) ||
            ishydrus_page_of_pages_page(obj["pages"])));
}
export function isget_manage_pages_get_page_info_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true);
}
export function isget_manage_pages_get_page_info_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_manage_pages_get_page_info_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_pages_get_page_info_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_manage_pages_get_page_info_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_manage_pages_get_page_info_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_manage_pages_get_page_info_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function"));
}
export function ispost_manage_pages_add_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_manage_pages"] === true);
}
export function ispost_manage_pages_add_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string" &&
        obj["Content-Type"] === "application/json");
}
export function ispost_manage_pages_add_files_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_pages_add_files_body(obj, _argumentName) {
    return ((((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["page_key"] === "string" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["file_ids"]) &&
            obj["file_ids"].every((e) => typeof e === "number") &&
            typeof obj["hashes"] === "undefined") ||
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["page_key"] === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e) => typeof e === "string") &&
                typeof obj["file_ids"] === "undefined")));
}
export function ispost_manage_pages_add_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_manage_pages_add_files_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        ispost_manage_pages_add_files_body(obj["body"]));
}
export function ispost_manage_pages_add_files_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_get_files_search_files_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true);
}
export function isget_get_files_search_files_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_get_files_search_files_arguments(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["tags"] === "string" &&
        typeof obj["system_inbox"] === "undefined" &&
        typeof obj["system_archive"] === "undefined");
}
export function isget_get_files_search_files_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_get_files_search_files_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_get_files_search_files_headers(obj["headers"]) &&
        isget_get_files_search_files_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_get_files_search_files_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["file_ids"]) &&
        obj["file_ids"].every((e) => typeof e === "number"));
}
export function isget_get_files_file_metadata_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true);
}
export function isget_get_files_file_metadata_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_get_files_file_metadata_arguments(obj, _argumentName) {
    return ((((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        (isget_api_version_arguments(obj["only_return_identifiers"]) ||
            obj["only_return_identifiers"] === false ||
            obj["only_return_identifiers"] === true) &&
        (isget_api_version_arguments(obj["detailed_url_information"]) ||
            obj["detailed_url_information"] === false ||
            obj["detailed_url_information"] === true) ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            Array.isArray(obj["file_ids"]) &&
            obj["file_ids"].every((e) => typeof e === "number") &&
            typeof obj["hashes"] === "undefined") ||
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (isget_api_version_arguments(obj["only_return_identifiers"]) ||
                obj["only_return_identifiers"] === false ||
                obj["only_return_identifiers"] === true) &&
            (isget_api_version_arguments(obj["detailed_url_information"]) ||
                obj["detailed_url_information"] === false ||
                obj["detailed_url_information"] === true) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
                Array.isArray(obj["hashes"]) &&
                obj["hashes"].every((e) => typeof e === "string") &&
                typeof obj["file_ids"] === "undefined")));
}
export function isget_get_files_file_metadata_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_get_files_file_metadata_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_get_files_file_metadata_headers(obj["headers"]) &&
        isget_get_files_file_metadata_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_get_files_file_metadata_recieve(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        Array.isArray(obj["metadata"]) &&
        obj["metadata"].every((e) => (e !== null &&
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
            e["known_urls"].every((e) => typeof e === "string") &&
            Array.isArray(e["service_names_to_statuses_to_tags"]) &&
            e["service_names_to_statuses_to_tags"].every((e) => isget_metadata_types(e)) &&
            Array.isArray(e["service_names_to_statuses_to_display_tags"]) &&
            e["service_names_to_statuses_to_display_tags"].every((e) => isget_metadata_types(e)) &&
            (isget_api_version_arguments(e["detailed_known_urls"]) ||
                Array.isArray(e["detailed_known_urls"]) &&
                    e["detailed_known_urls"].every((e) => isget_add_urls_get_url_info_recieve(e)))));
}
export function isget_get_files_file_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true);
}
export function isget_get_files_file_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_get_files_file_arguments(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["file_id"] === "number" &&
        typeof obj["hash"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["file_id"] === "undefined"));
}
export function isget_get_files_file_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_get_files_file_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_get_files_file_headers(obj["headers"]) &&
        isget_get_files_file_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function isget_get_files_thumbnail_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        typeof obj["hydrus_permission_manage_database"] === "boolean" &&
        obj["hydrus_permission_search_for_files"] === true);
}
export function isget_get_files_thumbnail_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function isget_get_files_thumbnail_arguments(obj, _argumentName) {
    return (((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["file_id"] === "number" &&
        typeof obj["hash"] === "undefined" ||
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj["hash"] === "string" &&
            typeof obj["file_id"] === "undefined"));
}
export function isget_get_files_thumbnail_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function isget_get_files_thumbnail_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        isget_get_files_thumbnail_headers(obj["headers"]) &&
        isget_get_files_thumbnail_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function ispost_manage_database_lock_on_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        obj["hydrus_permission_manage_database"] === true);
}
export function ispost_manage_database_lock_on_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function ispost_manage_database_lock_on_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_database_lock_on_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_database_lock_on_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_manage_database_lock_on_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function ispost_manage_database_lock_on_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_database_lock_off_prereqs(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["hydrus_permission_import_urls"] === "boolean" &&
        typeof obj["hydrus_permission_import_files"] === "boolean" &&
        typeof obj["hydrus_permission_add_tags"] === "boolean" &&
        typeof obj["hydrus_permission_search_for_files"] === "boolean" &&
        typeof obj["hydrus_permission_manage_pages"] === "boolean" &&
        typeof obj["hydrus_permission_manage_cookies"] === "boolean" &&
        obj["hydrus_permission_manage_database"] === true);
}
export function ispost_manage_database_lock_off_headers(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        typeof obj["Hydrus-Client-API-Access-Key"] === "string");
}
export function ispost_manage_database_lock_off_arguments(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_database_lock_off_body(obj, _argumentName) {
    return (typeof obj === "undefined");
}
export function ispost_manage_database_lock_off_send(obj, _argumentName) {
    return ((obj !== null &&
        typeof obj === "object" ||
        typeof obj === "function") &&
        ispost_manage_database_lock_off_headers(obj["headers"]) &&
        isget_api_version_arguments(obj["arguments"]) &&
        isget_api_version_arguments(obj["body"]));
}
export function ispost_manage_database_lock_off_recieve(obj, _argumentName) {
    return (typeof obj === "undefined");
}
//# sourceMappingURL=index.guard.js.map