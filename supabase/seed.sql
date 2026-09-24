-- ==============================================================================
-- THE VINEYARDS OS — PRODUCTION SEED DATA
-- ==============================================================================

insert into public.feed_items (category, title, summary, content, author, image_url, likes_count) values
('Event', 'The Vineyards Summer Solstice & Wine Pairing', 'Join us at the Vineyard Clubhouse for an exclusive estate tasting overlooking private hilltops.', 'Resident-exclusive event celebrating the summer solstice with vintage estate reserves and farm-to-table culinary boards.', 'Estate Management', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&h=600&q=80', 28),
('Notice', 'Solar Microgrid & Tesla Megapack Maintenance', 'Scheduled quarterly calibration for our community solar array on Friday morning.', 'Clean energy generation remains at 98.4% autonomy. Minimal disruption expected during routine inverter updates.', 'HOA Infrastructure Committee', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=600&q=80', 14);

insert into public.assessments (unit_number, resident_name, category, amount, status, due_date) values
('Unit 14-B', 'Evelyn Vance', 'Q2 Master HOA Assessment', 680.00, 'Paid', '2026-06-01'),
('Unit 08-A', 'Julian Drake', 'Q2 Master HOA Assessment', 680.00, 'Pending', '2026-06-01');

insert into public.maintenance_tickets (unit_number, title, description, priority, status) values
('Unit 14-B', 'Terrace Irrigation Valve Calibration', 'Drip line in south garden requires flow sensor adjustment.', 'Normal', 'Scheduled');

insert into public.guest_passes (visitor_name, unit_number, date_valid, pass_type, rfid_code, status) values
('Alexander Thorne', 'Unit 14-B', '2026-05-28', 'Day Visitor', 'RFID-8849-VNY', 'Active');
