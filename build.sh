#!/bin/bash
echo "Updating all website pages with common Header and Footer..."
node generate-html.cjs
echo "Done! All pages successfully updated."
