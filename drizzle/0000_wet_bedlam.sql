CREATE TABLE `applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`restaurant` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`website` text,
	`revenue` text NOT NULL,
	`locations` text NOT NULL,
	`goals` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
