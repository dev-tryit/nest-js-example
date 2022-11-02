#!/bin/bash
module_name=$1

cd ../src/modules
nest g mo $module_name
nest g co $module_name
nest g s $module_name
cd ../../scripts