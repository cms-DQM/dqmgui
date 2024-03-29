CFLAGS:=-D_GNU_SOURCE -DWITHOUT_CMS_FRAMEWORK=1 -D__STDC_LIMIT_MACROS -U__DEPRECATED -fPIC -g -O2 -W -Wall -Wno-long-long -std=c++17
LDFLAGS:=-Wl,-E -Wl,--hash-style=gnu
ROOTLIBS:=-lCore -lRIO -lNet -lHist -lMatrix -lThread -lTree -lMathCore -lGpad -lGraf3d -lGraf -lPhysics -lPostscript -lASImage
INCLUDE=-I. -I$(ROOT_ROOT)/include -I$(BOOST_ROOT)/include -I$(PNG_ROOT)/include -I$(LIBJPEG_TURBO_ROOT)/include
LIBDIR=-L./lib -L$(shell echo $(LD_LIBRARY_PATH) | sed 's|:| -L|g')
OTHERLIBS:=-ldl -ljpeg -lpng

all: bin/render lib/libDQMRenderPlugins.so
	@echo All build

objs/src/%.cc.o: src/%.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) $(INCLUDE) -o $@ $<

objs/plugins/%.cc.o: plugins/%.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) -O3 $(INCLUDE) -o $@ $<

bin/render: objs/src/render.cc.o objs/src/DQMRenderPlugin.cc.o
	@mkdir -p $(@D)
	g++ $(LDFLAGS) $(LIBDIR) $(ROOTLIBS) $(OTHERLIBS) $? $(INCLUDE) -o $@ -lstdc++fs

lib/libDQMRenderPlugins.so: $(addprefix objs/,$(addsuffix .o,$(wildcard plugins/*.cc)))
	@mkdir -p $(@D)
	g++ $(CFLAGS) -O3 --shared $? -o $@

clean:
	rm -rf objs lib bin
