import { each_possbile_hydrus_permissions_as_either, hydrus_gallery_downloader_page, hydrus_simple_downloader_page, hydrus_hard_drive_import_page, hydrus_petitions_page, hydrus_file_search_page, hydrus_URL_downloader_page, hydrus_duplicates_page, hydrus_thread_watcher_page, hydrus_page_of_pages_page, get_metadata_types, get_api_version_prereqs, get_api_version_headers, get_api_version_arguments, get_api_version_body, get_api_version_send, get_api_version_recieve, get_request_new_permissions_prereqs, get_request_new_permissions_headers, get_request_new_permissions_arguments, get_request_new_permissions_body, get_request_new_permissions_send, get_request_new_permissions_recieve, get_session_key_prereqs, get_session_key_headers, get_session_key_arguments, get_session_key_body, get_session_key_send, get_session_key_recieve, get_verify_access_key_prereqs, get_verify_access_key_headers, get_verify_access_key_arguments, get_verify_access_key_body, get_verify_access_key_send, get_verify_access_key_recieve, get_services_prereqs, get_services_headers, get_services_arguments, get_services_body, get_services_send, get_services_recieve, post_add_files_add_file_prereqs, post_add_files_add_file_headers, post_add_files_add_file_headers_json, post_add_files_add_file_headers_stream, post_add_files_add_file_arguments, post_add_files_add_file_body, post_add_files_add_file_send, post_add_files_add_file_recieve, post_add_files_delete_files_prereqs, post_add_files_delete_files_headers, post_add_files_delete_files_arguments, post_add_files_delete_files_body, post_add_files_delete_files_send, post_add_files_delete_files_recieve, post_add_files_undelete_files_prereqs, post_add_files_undelete_files_headers, post_add_files_undelete_files_arguments, post_add_files_undelete_files_body, post_add_files_undelete_files_send, post_add_files_undelete_files_recieve, post_add_files_archive_files_prereqs, post_add_files_archive_files_headers, post_add_files_archive_files_arguments, post_add_files_archive_files_body, post_add_files_archive_files_send, post_add_files_archive_files_recieve, post_add_files_unarchive_files_prereqs, post_add_files_unarchive_files_headers, post_add_files_unarchive_files_arguments, post_add_files_unarchive_files_body, post_add_files_unarchive_files_send, post_add_files_unarchive_files_recieve, get_add_tags_clean_tags_prereqs, get_add_tags_clean_tags_headers, get_add_tags_clean_tags_arguments, get_add_tags_clean_tags_body, get_add_tags_clean_tags_send, get_add_tags_clean_tags_recieve, get_add_tags_get_tag_services_prereqs, get_add_tags_get_tag_services_headers, get_add_tags_get_tag_services_arguments, get_add_tags_get_tag_services_body, get_add_tags_get_tag_services_send, get_add_tags_get_tag_services_recieve, post_add_tags_add_tags_prereqs, post_add_tags_add_tags_headers, post_add_tags_add_tags_arguments, post_add_tags_add_tags_body, post_add_tags_add_tags_send, post_add_tags_add_tags_recieve, get_add_urls_get_url_files_prereqs, get_add_urls_get_url_files_headers, get_add_urls_get_url_files_arguments, get_add_urls_get_url_files_body, get_add_urls_get_url_files_send, get_add_urls_get_url_files_recieve, get_add_urls_get_url_info_prereqs, get_add_urls_get_url_info_headers, get_add_urls_get_url_info_arguments, get_add_urls_get_url_info_body, get_add_urls_get_url_info_send, get_add_urls_get_url_info_recieve, get_add_urls_add_url_prereqs, get_add_urls_add_url_headers, get_add_urls_add_url_arguments, get_add_urls_add_url_body, get_add_urls_add_url_send, get_add_urls_add_url_recieve, post_add_urls_associate_url_prereqs, post_add_urls_associate_url_headers, post_add_urls_associate_url_arguments, post_add_urls_associate_url_body, post_add_urls_associate_url_send, post_add_urls_associate_url_recieve, get_manage_cookies_get_cookies_prereqs, get_manage_cookies_get_cookies_headers, get_manage_cookies_get_cookies_arguments, get_manage_cookies_get_cookies_body, get_manage_cookies_get_cookies_send, post_manage_cookies_set_cookies_prereqs, post_manage_cookies_set_cookies_headers, post_manage_cookies_set_cookies_arguments, post_manage_cookies_set_cookies_recieve, post_manage_headers_set_user_agent_prereqs, post_manage_headers_set_user_agent_headers, post_manage_headers_set_user_agent_arguments, post_manage_headers_set_user_agent_body, post_manage_headers_set_user_agent_send, post_manage_headers_set_user_agent_recieve, get_manage_pages_get_pages_prereqs, get_manage_pages_get_pages_headers, get_manage_pages_get_pages_arguments, get_manage_pages_get_pages_body, get_manage_pages_get_pages_send, get_manage_pages_get_pages_recieve, get_manage_pages_get_page_info_prereqs, get_manage_pages_get_page_info_headers, get_manage_pages_get_page_info_arguments, get_manage_pages_get_page_info_body, get_manage_pages_get_page_info_send, get_manage_pages_get_page_info_recieve, post_manage_pages_add_files_prereqs, post_manage_pages_add_files_headers, post_manage_pages_add_files_arguments, post_manage_pages_add_files_body, post_manage_pages_add_files_send, post_manage_pages_add_files_recieve, get_get_files_search_files_prereqs, get_get_files_search_files_headers, get_get_files_search_files_arguments, get_get_files_search_files_body, get_get_files_search_files_send, get_get_files_search_files_recieve, get_get_files_file_metadata_prereqs, get_get_files_file_metadata_headers, get_get_files_file_metadata_arguments, get_get_files_file_metadata_body, get_get_files_file_metadata_send, get_get_files_file_metadata_recieve, get_get_files_file_prereqs, get_get_files_file_headers, get_get_files_file_arguments, get_get_files_file_body, get_get_files_file_send, get_get_files_thumbnail_prereqs, get_get_files_thumbnail_headers, get_get_files_thumbnail_arguments, get_get_files_thumbnail_body, get_get_files_thumbnail_send, post_manage_database_lock_on_prereqs, post_manage_database_lock_on_headers, post_manage_database_lock_on_arguments, post_manage_database_lock_on_body, post_manage_database_lock_on_send, post_manage_database_lock_on_recieve, post_manage_database_lock_off_prereqs, post_manage_database_lock_off_headers, post_manage_database_lock_off_arguments, post_manage_database_lock_off_body, post_manage_database_lock_off_send, post_manage_database_lock_off_recieve } from "./index";
export declare function iseach_possbile_hydrus_permissions_as_either(obj: any, _argumentName?: string): obj is each_possbile_hydrus_permissions_as_either;
export declare function ishydrus_gallery_downloader_page(obj: any, _argumentName?: string): obj is hydrus_gallery_downloader_page;
export declare function ishydrus_simple_downloader_page(obj: any, _argumentName?: string): obj is hydrus_simple_downloader_page;
export declare function ishydrus_hard_drive_import_page(obj: any, _argumentName?: string): obj is hydrus_hard_drive_import_page;
export declare function ishydrus_petitions_page(obj: any, _argumentName?: string): obj is hydrus_petitions_page;
export declare function ishydrus_file_search_page(obj: any, _argumentName?: string): obj is hydrus_file_search_page;
export declare function ishydrus_URL_downloader_page(obj: any, _argumentName?: string): obj is hydrus_URL_downloader_page;
export declare function ishydrus_duplicates_page(obj: any, _argumentName?: string): obj is hydrus_duplicates_page;
export declare function ishydrus_thread_watcher_page(obj: any, _argumentName?: string): obj is hydrus_thread_watcher_page;
export declare function ishydrus_page_of_pages_page(obj: any, _argumentName?: string): obj is hydrus_page_of_pages_page;
export declare function isget_metadata_types(obj: any, _argumentName?: string): obj is get_metadata_types;
export declare function isget_api_version_prereqs(obj: any, _argumentName?: string): obj is get_api_version_prereqs;
export declare function isget_api_version_headers(obj: any, _argumentName?: string): obj is get_api_version_headers;
export declare function isget_api_version_arguments(obj: any, _argumentName?: string): obj is get_api_version_arguments;
export declare function isget_api_version_body(obj: any, _argumentName?: string): obj is get_api_version_body;
export declare function isget_api_version_send(obj: any, _argumentName?: string): obj is get_api_version_send;
export declare function isget_api_version_recieve(obj: any, _argumentName?: string): obj is get_api_version_recieve;
export declare function isget_request_new_permissions_prereqs(obj: any, _argumentName?: string): obj is get_request_new_permissions_prereqs;
export declare function isget_request_new_permissions_headers(obj: any, _argumentName?: string): obj is get_request_new_permissions_headers;
export declare function isget_request_new_permissions_arguments(obj: any, _argumentName?: string): obj is get_request_new_permissions_arguments;
export declare function isget_request_new_permissions_body(obj: any, _argumentName?: string): obj is get_request_new_permissions_body;
export declare function isget_request_new_permissions_send(obj: any, _argumentName?: string): obj is get_request_new_permissions_send;
export declare function isget_request_new_permissions_recieve(obj: any, _argumentName?: string): obj is get_request_new_permissions_recieve;
export declare function isget_session_key_prereqs(obj: any, _argumentName?: string): obj is get_session_key_prereqs;
export declare function isget_session_key_headers(obj: any, _argumentName?: string): obj is get_session_key_headers;
export declare function isget_session_key_arguments(obj: any, _argumentName?: string): obj is get_session_key_arguments;
export declare function isget_session_key_body(obj: any, _argumentName?: string): obj is get_session_key_body;
export declare function isget_session_key_send(obj: any, _argumentName?: string): obj is get_session_key_send;
export declare function isget_session_key_recieve(obj: any, _argumentName?: string): obj is get_session_key_recieve;
export declare function isget_verify_access_key_prereqs(obj: any, _argumentName?: string): obj is get_verify_access_key_prereqs;
export declare function isget_verify_access_key_headers(obj: any, _argumentName?: string): obj is get_verify_access_key_headers;
export declare function isget_verify_access_key_arguments(obj: any, _argumentName?: string): obj is get_verify_access_key_arguments;
export declare function isget_verify_access_key_body(obj: any, _argumentName?: string): obj is get_verify_access_key_body;
export declare function isget_verify_access_key_send(obj: any, _argumentName?: string): obj is get_verify_access_key_send;
export declare function isget_verify_access_key_recieve(obj: any, _argumentName?: string): obj is get_verify_access_key_recieve;
export declare function isget_services_prereqs(obj: any, _argumentName?: string): obj is get_services_prereqs;
export declare function isget_services_headers(obj: any, _argumentName?: string): obj is get_services_headers;
export declare function isget_services_arguments(obj: any, _argumentName?: string): obj is get_services_arguments;
export declare function isget_services_body(obj: any, _argumentName?: string): obj is get_services_body;
export declare function isget_services_send(obj: any, _argumentName?: string): obj is get_services_send;
export declare function isget_services_recieve(obj: any, _argumentName?: string): obj is get_services_recieve;
export declare function ispost_add_files_add_file_prereqs(obj: any, _argumentName?: string): obj is post_add_files_add_file_prereqs;
export declare function ispost_add_files_add_file_headers(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers;
export declare function ispost_add_files_add_file_headers_json(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers_json;
export declare function ispost_add_files_add_file_headers_stream(obj: any, _argumentName?: string): obj is post_add_files_add_file_headers_stream;
export declare function ispost_add_files_add_file_arguments(obj: any, _argumentName?: string): obj is post_add_files_add_file_arguments;
export declare function ispost_add_files_add_file_body(obj: any, _argumentName?: string): obj is post_add_files_add_file_body;
export declare function ispost_add_files_add_file_send(obj: any, _argumentName?: string): obj is post_add_files_add_file_send;
export declare function ispost_add_files_add_file_recieve(obj: any, _argumentName?: string): obj is post_add_files_add_file_recieve;
export declare function ispost_add_files_delete_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_delete_files_prereqs;
export declare function ispost_add_files_delete_files_headers(obj: any, _argumentName?: string): obj is post_add_files_delete_files_headers;
export declare function ispost_add_files_delete_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_delete_files_arguments;
export declare function ispost_add_files_delete_files_body(obj: any, _argumentName?: string): obj is post_add_files_delete_files_body;
export declare function ispost_add_files_delete_files_send(obj: any, _argumentName?: string): obj is post_add_files_delete_files_send;
export declare function ispost_add_files_delete_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_delete_files_recieve;
export declare function ispost_add_files_undelete_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_prereqs;
export declare function ispost_add_files_undelete_files_headers(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_headers;
export declare function ispost_add_files_undelete_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_arguments;
export declare function ispost_add_files_undelete_files_body(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_body;
export declare function ispost_add_files_undelete_files_send(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_send;
export declare function ispost_add_files_undelete_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_undelete_files_recieve;
export declare function ispost_add_files_archive_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_archive_files_prereqs;
export declare function ispost_add_files_archive_files_headers(obj: any, _argumentName?: string): obj is post_add_files_archive_files_headers;
export declare function ispost_add_files_archive_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_archive_files_arguments;
export declare function ispost_add_files_archive_files_body(obj: any, _argumentName?: string): obj is post_add_files_archive_files_body;
export declare function ispost_add_files_archive_files_send(obj: any, _argumentName?: string): obj is post_add_files_archive_files_send;
export declare function ispost_add_files_archive_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_archive_files_recieve;
export declare function ispost_add_files_unarchive_files_prereqs(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_prereqs;
export declare function ispost_add_files_unarchive_files_headers(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_headers;
export declare function ispost_add_files_unarchive_files_arguments(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_arguments;
export declare function ispost_add_files_unarchive_files_body(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_body;
export declare function ispost_add_files_unarchive_files_send(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_send;
export declare function ispost_add_files_unarchive_files_recieve(obj: any, _argumentName?: string): obj is post_add_files_unarchive_files_recieve;
export declare function isget_add_tags_clean_tags_prereqs(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_prereqs;
export declare function isget_add_tags_clean_tags_headers(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_headers;
export declare function isget_add_tags_clean_tags_arguments(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_arguments;
export declare function isget_add_tags_clean_tags_body(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_body;
export declare function isget_add_tags_clean_tags_send(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_send;
export declare function isget_add_tags_clean_tags_recieve(obj: any, _argumentName?: string): obj is get_add_tags_clean_tags_recieve;
export declare function isget_add_tags_get_tag_services_prereqs(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_prereqs;
export declare function isget_add_tags_get_tag_services_headers(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_headers;
export declare function isget_add_tags_get_tag_services_arguments(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_arguments;
export declare function isget_add_tags_get_tag_services_body(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_body;
export declare function isget_add_tags_get_tag_services_send(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_send;
export declare function isget_add_tags_get_tag_services_recieve(obj: any, _argumentName?: string): obj is get_add_tags_get_tag_services_recieve;
export declare function ispost_add_tags_add_tags_prereqs(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_prereqs;
export declare function ispost_add_tags_add_tags_headers(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_headers;
export declare function ispost_add_tags_add_tags_arguments(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_arguments;
export declare function ispost_add_tags_add_tags_body(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_body;
export declare function ispost_add_tags_add_tags_send(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_send;
export declare function ispost_add_tags_add_tags_recieve(obj: any, _argumentName?: string): obj is post_add_tags_add_tags_recieve;
export declare function isget_add_urls_get_url_files_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_prereqs;
export declare function isget_add_urls_get_url_files_headers(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_headers;
export declare function isget_add_urls_get_url_files_arguments(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_arguments;
export declare function isget_add_urls_get_url_files_body(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_body;
export declare function isget_add_urls_get_url_files_send(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_send;
export declare function isget_add_urls_get_url_files_recieve(obj: any, _argumentName?: string): obj is get_add_urls_get_url_files_recieve;
export declare function isget_add_urls_get_url_info_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_prereqs;
export declare function isget_add_urls_get_url_info_headers(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_headers;
export declare function isget_add_urls_get_url_info_arguments(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_arguments;
export declare function isget_add_urls_get_url_info_body(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_body;
export declare function isget_add_urls_get_url_info_send(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_send;
export declare function isget_add_urls_get_url_info_recieve(obj: any, _argumentName?: string): obj is get_add_urls_get_url_info_recieve;
export declare function isget_add_urls_add_url_prereqs(obj: any, _argumentName?: string): obj is get_add_urls_add_url_prereqs;
export declare function isget_add_urls_add_url_headers(obj: any, _argumentName?: string): obj is get_add_urls_add_url_headers;
export declare function isget_add_urls_add_url_arguments(obj: any, _argumentName?: string): obj is get_add_urls_add_url_arguments;
export declare function isget_add_urls_add_url_body(obj: any, _argumentName?: string): obj is get_add_urls_add_url_body;
export declare function isget_add_urls_add_url_send(obj: any, _argumentName?: string): obj is get_add_urls_add_url_send;
export declare function isget_add_urls_add_url_recieve(obj: any, _argumentName?: string): obj is get_add_urls_add_url_recieve;
export declare function ispost_add_urls_associate_url_prereqs(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_prereqs;
export declare function ispost_add_urls_associate_url_headers(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_headers;
export declare function ispost_add_urls_associate_url_arguments(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_arguments;
export declare function ispost_add_urls_associate_url_body(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_body;
export declare function ispost_add_urls_associate_url_send(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_send;
export declare function ispost_add_urls_associate_url_recieve(obj: any, _argumentName?: string): obj is post_add_urls_associate_url_recieve;
export declare function isget_manage_cookies_get_cookies_prereqs(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_prereqs;
export declare function isget_manage_cookies_get_cookies_headers(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_headers;
export declare function isget_manage_cookies_get_cookies_arguments(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_arguments;
export declare function isget_manage_cookies_get_cookies_body(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_body;
export declare function isget_manage_cookies_get_cookies_send(obj: any, _argumentName?: string): obj is get_manage_cookies_get_cookies_send;
export declare function ispost_manage_cookies_set_cookies_prereqs(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_prereqs;
export declare function ispost_manage_cookies_set_cookies_headers(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_headers;
export declare function ispost_manage_cookies_set_cookies_arguments(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_arguments;
export declare function ispost_manage_cookies_set_cookies_recieve(obj: any, _argumentName?: string): obj is post_manage_cookies_set_cookies_recieve;
export declare function ispost_manage_headers_set_user_agent_prereqs(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_prereqs;
export declare function ispost_manage_headers_set_user_agent_headers(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_headers;
export declare function ispost_manage_headers_set_user_agent_arguments(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_arguments;
export declare function ispost_manage_headers_set_user_agent_body(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_body;
export declare function ispost_manage_headers_set_user_agent_send(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_send;
export declare function ispost_manage_headers_set_user_agent_recieve(obj: any, _argumentName?: string): obj is post_manage_headers_set_user_agent_recieve;
export declare function isget_manage_pages_get_pages_prereqs(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_prereqs;
export declare function isget_manage_pages_get_pages_headers(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_headers;
export declare function isget_manage_pages_get_pages_arguments(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_arguments;
export declare function isget_manage_pages_get_pages_body(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_body;
export declare function isget_manage_pages_get_pages_send(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_send;
export declare function isget_manage_pages_get_pages_recieve(obj: any, _argumentName?: string): obj is get_manage_pages_get_pages_recieve;
export declare function isget_manage_pages_get_page_info_prereqs(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_prereqs;
export declare function isget_manage_pages_get_page_info_headers(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_headers;
export declare function isget_manage_pages_get_page_info_arguments(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_arguments;
export declare function isget_manage_pages_get_page_info_body(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_body;
export declare function isget_manage_pages_get_page_info_send(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_send;
export declare function isget_manage_pages_get_page_info_recieve(obj: any, _argumentName?: string): obj is get_manage_pages_get_page_info_recieve;
export declare function ispost_manage_pages_add_files_prereqs(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_prereqs;
export declare function ispost_manage_pages_add_files_headers(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_headers;
export declare function ispost_manage_pages_add_files_arguments(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_arguments;
export declare function ispost_manage_pages_add_files_body(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_body;
export declare function ispost_manage_pages_add_files_send(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_send;
export declare function ispost_manage_pages_add_files_recieve(obj: any, _argumentName?: string): obj is post_manage_pages_add_files_recieve;
export declare function isget_get_files_search_files_prereqs(obj: any, _argumentName?: string): obj is get_get_files_search_files_prereqs;
export declare function isget_get_files_search_files_headers(obj: any, _argumentName?: string): obj is get_get_files_search_files_headers;
export declare function isget_get_files_search_files_arguments(obj: any, _argumentName?: string): obj is get_get_files_search_files_arguments;
export declare function isget_get_files_search_files_body(obj: any, _argumentName?: string): obj is get_get_files_search_files_body;
export declare function isget_get_files_search_files_send(obj: any, _argumentName?: string): obj is get_get_files_search_files_send;
export declare function isget_get_files_search_files_recieve(obj: any, _argumentName?: string): obj is get_get_files_search_files_recieve;
export declare function isget_get_files_file_metadata_prereqs(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_prereqs;
export declare function isget_get_files_file_metadata_headers(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_headers;
export declare function isget_get_files_file_metadata_arguments(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_arguments;
export declare function isget_get_files_file_metadata_body(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_body;
export declare function isget_get_files_file_metadata_send(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_send;
export declare function isget_get_files_file_metadata_recieve(obj: any, _argumentName?: string): obj is get_get_files_file_metadata_recieve;
export declare function isget_get_files_file_prereqs(obj: any, _argumentName?: string): obj is get_get_files_file_prereqs;
export declare function isget_get_files_file_headers(obj: any, _argumentName?: string): obj is get_get_files_file_headers;
export declare function isget_get_files_file_arguments(obj: any, _argumentName?: string): obj is get_get_files_file_arguments;
export declare function isget_get_files_file_body(obj: any, _argumentName?: string): obj is get_get_files_file_body;
export declare function isget_get_files_file_send(obj: any, _argumentName?: string): obj is get_get_files_file_send;
export declare function isget_get_files_thumbnail_prereqs(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_prereqs;
export declare function isget_get_files_thumbnail_headers(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_headers;
export declare function isget_get_files_thumbnail_arguments(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_arguments;
export declare function isget_get_files_thumbnail_body(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_body;
export declare function isget_get_files_thumbnail_send(obj: any, _argumentName?: string): obj is get_get_files_thumbnail_send;
export declare function ispost_manage_database_lock_on_prereqs(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_prereqs;
export declare function ispost_manage_database_lock_on_headers(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_headers;
export declare function ispost_manage_database_lock_on_arguments(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_arguments;
export declare function ispost_manage_database_lock_on_body(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_body;
export declare function ispost_manage_database_lock_on_send(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_send;
export declare function ispost_manage_database_lock_on_recieve(obj: any, _argumentName?: string): obj is post_manage_database_lock_on_recieve;
export declare function ispost_manage_database_lock_off_prereqs(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_prereqs;
export declare function ispost_manage_database_lock_off_headers(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_headers;
export declare function ispost_manage_database_lock_off_arguments(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_arguments;
export declare function ispost_manage_database_lock_off_body(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_body;
export declare function ispost_manage_database_lock_off_send(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_send;
export declare function ispost_manage_database_lock_off_recieve(obj: any, _argumentName?: string): obj is post_manage_database_lock_off_recieve;
//# sourceMappingURL=index.guard.d.ts.map